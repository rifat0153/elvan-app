import { addDoc, collection, collectionGroup, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import React, {FC, useEffect, useState} from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { setdb } from "../database/Firebase";
import Food from "../interfaces/Food";

interface Props {
  food: Food;
}
const AddFav : FC<Props> = (props) => {
    const [fav, setFav] = useState(false);
    const [icon, setIcon] = useState(
      require('../../assets/icons/nonfav.png'),
    );

    const addFav = () => {
      if (fav) {
        setFav(false);
        setIcon(require('../../assets/icons/nonfav.png'));
      } else {
        setFav(true);
        setIcon(require('../../assets/icons/fav.png'));
      }
    };

    const AddFavFood = async () => {
      if (fav) {
        await setDoc(doc(setdb, 'Favourites', props.food.id), {
          title: props.food.title,
          subtitle: props.food.subtitle,
          image: props.food.image,
          price: props.food.price,
        });  
        
      } else {
        const FavFood = doc(setdb, 'Favourites', props.food.id);
        await deleteDoc(FavFood);
      }
    };

    useEffect(()=>{
      AddFavFood();
    },[fav])

    
    return (
      <View>
        <TouchableOpacity onPress={() => {addFav()}}>
          <Image
            style={{height: 17.65, width: 20.01, resizeMode: 'contain'}}
            source={icon}
          />
        </TouchableOpacity>
      </View>
    );
}

export default AddFav;
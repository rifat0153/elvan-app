import {
  addDoc,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  setDoc,
} from 'firebase/firestore/lite';
import React, {FC, useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {setdb} from '../../database/Firebase';
import Food from '../../interfaces/Food';
import {UseFavoritesStore} from '../../zustand/FavoritesList';

interface Props {
  food: Food;
}
const AddFav: FC<Props> = props => {
  const favoritesStore = UseFavoritesStore();
  const [clicked, setClicked] = useState(false);
  const [fav, setFav] = useState(false);
  const [icon, setIcon] = useState(require('../../../assets/icons/nonfav.png'));

  useEffect(() => {
    favoritesStore.FoodItems.map(food => {
      if (food.id == props.food.id) {
        setFav(true);
        setIcon(require('../../../assets/icons/fav.png'));
        // return;
      }
    });
  }, []);

  const addFav = () => {
    setClicked(true);
    if (fav) {
      setFav(false);
      setIcon(require('../../../assets/icons/nonfav.png'));
      return;
    }
    setFav(true);
    setIcon(require('../../../assets/icons/fav.png'));
  };

  useEffect(() => {
    const AddFavFood = async () => {
      if (fav) {
        await setDoc(doc(setdb, 'Favorites', props.food.id), {
          title: props.food.title,
          subtitle: props.food.subtitle,
          image: props.food.image,
          price: props.food.price,
          category: props.food.category,
        });
        return;
      }
      const FavFood = doc(setdb, 'Favorites', props.food.id);
      await deleteDoc(FavFood);
    };
    if (clicked) {
      AddFavFood();
    }
  }, [clicked, fav]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          addFav();
        }}>
        <Image
          style={{height: 17.65, width: 20.01, resizeMode: 'contain'}}
          source={icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddFav;

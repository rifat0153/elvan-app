import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Cart, FoodTile} from '../components';
import {FoodDetails} from '../screens';

import {storage} from '../database/Firebase';
import {db} from '../database/Firebase';
import {collection, getDocs} from 'firebase/firestore';
import {doc, onSnapshot} from 'firebase/firestore';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {ScrollView} from 'react-native-gesture-handler';

import Food from '../interfaces/Food';
import {scale, ScaledSheet} from 'react-native-size-matters';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParamList>;
const FoodList: FC<Props> = ({navigation}) => {
  const [menu, setMenu] = useState<Array<Food>>([
    {
      id: 'EF4kdkDJllYrDJvemMst7',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Whopper',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst6',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Double Whopper',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst5',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Beef Burger',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst1',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Beef Burger',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst2',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Beef Burger',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst3',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Beef Burger',
    },
    {
      id: 'EF4kdkDJllYrDJvemMst4',
      image:
        'https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fburger.png?alt=media&token=373f1769-1a50-4357-b155-c069d9774fed',
      price: 420,
      subtitle:
        'savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy',
      title: 'Beef Burger',
    },
  ]);

  // useEffect(() => {
  //   const FetchMenu = async () => {
  //     try {
  //       const colRef = collection(db, 'Food_menu');
  //       const unsub = onSnapshot(colRef, snapshot => {
  //         setMenu([]);
  //         snapshot.docs.map(doc => {
  //           let item: Food = {
  //             id: doc.id,
  //             title: doc.data().title,
  //             subtitle: doc.data().subtitle,
  //             image: doc.data().image,
  //             price: doc.data().price,
  //           };

  //           setMenu(menu => [...menu, item]);
  //         });
  //       });
  //       return unsub;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   FetchMenu();
  // }, []);

  const FoodTiles = () => {
    return menu.map((food: Food) => {
      return (
        <View key={food.id}>
          <FoodTile
            food={food}
            onPress={() =>
              navigation.navigate('FoodDetails', {
                food: food,
              })
            }
          />
        </View>
      );
    });
  };

  return (
    <ImageBackground
      style={{height: scale(Height), width: scale(350), position: 'relative'}}
      resizeMode="cover"
      blurRadius={10}
      source={require('../../assets/images/elvan.png')}>
      <View>
        <View style={Styles.cart}>
          <Cart onPress={() => navigation.navigate('CartList')} />
        </View>
        <ScrollView>
          <View>{FoodTiles()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default FoodList;

const Styles = ScaledSheet.create({
  cart: {
    top: '540@s',
    left: '264@s',
    zIndex: 1,
  },
});

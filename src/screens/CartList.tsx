import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import {CartTile} from '../components';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {UseCartStore} from '../zustand/CartStore';

type Props = NativeStackScreenProps<RootStackParamList>;
const CartList: FC<Props> = props => {
  const cartStore = UseCartStore();
  useEffect(() => {}, []);

  const CartTiles = () => {
    return cartStore.cartItems.map(cartItem => {
      return (
        <View>
          <CartTile food={cartItem.food} />
        </View>
      );
    });
  };
  return <View>{CartTiles()}</View>;
};

export default CartList;

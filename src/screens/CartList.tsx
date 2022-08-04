import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {
  CartTile,
  ExpandButton,
  Schedule,
  TextButton,
  TextIconButton,
} from '../components';
import {Calculation} from '../components';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {UseCartStore} from '../zustand/CartStore';
import uuid from 'react-native-uuid';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../database/Firebase';

const Height = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParamList>;
const CartList: FC<Props> = ({navigation}) => {
  const cartStore = UseCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(cartStore.totalPrice);
  const [schedule, setSchedule] = useState<boolean>(false);

  useEffect(() => {
    cartStore.UpdateTotalPrice();
    setTotalPrice(cartStore.totalPrice);
  }, [cartStore.cartItems]);

  useEffect(() => {
    setTotalPrice(cartStore.totalPrice);
  }, [cartStore]);


  const CartTiles = () => {
    return cartStore.cartItems.map(cartItem => {
      return (
        <View>
          <CartTile cartFood={cartItem} />
        </View>
      );
    });
  };
  return (
    <View>
      <Image
        style={{height: scale(Height), width: scale(350), position: 'absolute'}}
        resizeMode="cover"
        blurRadius={10}
        source={require('../../assets/images/elvan.png')}
      />
      <ScrollView>
        <View>{CartTiles()}</View>
        <View style={Styles.Calculation}>
          <Calculation
            subTotal={totalPrice}
            deliveryCharge={totalPrice == 0 ? 0 : 100}></Calculation>
        </View>

        <Schedule />

        <View style={Styles.next}>
          <TextButton
            text="Next"
            height={50}
            width={333}
            color="#F0F5F9"
            bcolor="#E5251A"
            onPress={() => navigation.navigate('MakePayment')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CartList;

const Styles = ScaledSheet.create({
  Calculation: {
    marginTop: '20@s',
    width: '315@s',
    marginLeft: '16@s',
  },

  next: {
    alignSelf: 'center',
    marginTop: '120@s',
  },
});

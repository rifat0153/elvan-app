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
import AppBackground from '../AppBackground';
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

const Height = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParamList>;
const MakePayment: FC<Props> = ({navigation}) => {
  const cartStore = UseCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(cartStore.totalPrice);

  useEffect(() => {
    cartStore.UpdateTotalPrice();
    setTotalPrice(cartStore.totalPrice);
  }, [cartStore.cartItems]);

  useEffect(() => {
    setTotalPrice(cartStore.totalPrice);
  }, [cartStore]);

  return (
    <View>
      <AppBackground />
      <ScrollView>
        <View style={Styles.Calculation}>
          <Calculation
            subTotal={totalPrice}
            deliveryCharge={totalPrice == 0 ? 0 : 100}></Calculation>
        </View>

        <ExpandButton />

        <View style={{marginTop: scale(120)}}>
          <TextButton
            text="Confirm Payment"
            type="long"
            onPress={() => navigation.navigate('TrackOrder')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MakePayment;

const Styles = ScaledSheet.create({
  Calculation: {
    marginTop: '20@s',
    width: '315@s',
    marginLeft: '16@s',
  },
});

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useRef, useState} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Calculation} from '../components';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {UseCartStore} from '../zustand/CartStore';
import {View as MotiView} from 'moti';
import 'react-native-reanimated';
import AppBackground from '../AppBackground';
const Height = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParamList>;

const TrackOrder: FC<Props> = () => {
  const cartStore = UseCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(cartStore.totalPrice);
  const [timer, setTimer] = useState(2);
  const [sec, setSec] = useState<number>(0);
  const [minute, setMinute] = useState<number>(20);

  useEffect(() => {
    if (minute > 0) {
      setTimeout(() => {
        if (sec === 0) {
          setSec(59);
          setMinute(minute - 1);
        } else {
          setSec(sec - 1);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        if (sec > 0) {
          setSec(sec - 1);
        }
      }, 1000);
    }
  }, [sec]);

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
        {/* //////////////////////////////////////////////////////////*/}
        <Text style={Styles.text}>Your food is preparing</Text>
        <Text style={Styles.text}>{minute + ':' + sec}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={[Styles.rectangle, {backgroundColor: '#E5251A'}]} />
          <View
            style={[
              Styles.rectangle,
              {alignSelf: 'center', justifyContent: 'center'},
            ]}>
            <View style={[Styles.rectangle1, {}]} />
          </View>
          <View style={[Styles.rectangle, {}]} />
        </View>
        {/* //////////////////////////////////////////////////////////*/}

        <View style={Styles.Calculation}>
          <Calculation
            subTotal={totalPrice}
            deliveryCharge={totalPrice == 0 ? 0 : 100}></Calculation>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackOrder;

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
  text: {
    alignSelf: 'center',
    color: '#F0F5F9',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginBottom: '22@s',
  },
  rectangle: {
    height: '11@s',
    width: '73@s',
    borderRadius: 10,
    marginRight: '21@s',
    borderWidth: 2,
    borderColor: '#E5251A',
  },

  rectangle1: {
    height: '11@s',
    width: '35@s',
    borderRadius: 10,
    marginRight: '21@s',
    borderWidth: 2,
    borderColor: '#E5251A',
    backgroundColor: '#E5251A',
  },
});

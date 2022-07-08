import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const OrderList: FC = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Order List Screen</Text>
    </View>
  );
};

export default OrderList;

const Styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#2A2630',
  },
});

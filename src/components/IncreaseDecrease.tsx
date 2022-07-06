import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {UsePriceQuantityStore} from '../zustand/PriceQuantityStore'; //zustand

interface Props {
  color?: string;
}
const IncreaseDecrease: FC<Props> = props => {
  let [count, setCount] = useState(1);
  const store = UsePriceQuantityStore();

  const increment = () => {
    count = count + 1;
    setCount(count);
    store.changeQuantity(count);
  };

  const decrement = () => {
    if (count > 1) {
      count = count - 1;
      setCount(count);
      store.changeQuantity(count);
    }
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={[Styles.button, {backgroundColor: props.color, left: 5}]}
        onPress={() => decrement()}>
        <Text style={Styles.operator}>-</Text>
      </TouchableOpacity>
      <Text style={Styles.text}>{count}</Text>
      <TouchableOpacity
        style={[Styles.button, {backgroundColor: props.color, right: 4}]}
        onPress={() => increment()}>
        <Text style={Styles.operator}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IncreaseDecrease;

const Styles = ScaledSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    width: '27@s',
    height: '26@s',
    borderRadius: '6@s',
    resizeMode: 'contain',
    marginHorizontal: '8@s',
  },
  operator: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  text: {
    color: '#2A2630',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    flexBasis: '6%',
  },
});

import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Food from '../interfaces/Food';
import IncreaseDecrease from './IncreaseDecrease';

interface Props {
  food: Food;
}

const DetailsFoodInfo: FC<Props> = props => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={Styles.title}>{props.food.title}</Text>
      </View>
      <Text style={Styles.subtitle}>{props.food.subtitle}</Text>

      <View style={Styles.princrdec}>
        <Text style={Styles.price}>{props.food.price}Kr</Text>
        <IncreaseDecrease color="#E5251A" />
      </View>
    </View>
  );
};

export default DetailsFoodInfo;

const Styles = ScaledSheet.create({
  princrdec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '10@s',
    color: '#2A2630',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: '10@s',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

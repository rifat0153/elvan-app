import React, {FC, useState} from 'react';
import {
  View,
  Dimensions,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AddFav, TileFoodInfo} from '../components';
import Food from '../interfaces/Food';

interface Props {
  food: Food;
  onPress: () => void;
}

const FoodTile: FC<Props> = props => {
  const [addText, setAddText] = useState<string>('Add');

  const Add = () => {
    addText == 'Add' ? setAddText('Added') : setAddText('Add');
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={Styles.tile}>
          <TileFoodInfo food={props.food}/>
          <View style={Styles.right}>
            <AddFav food={props.food} />
            <TouchableOpacity onPress={() => Add()}>
              <Text style={Styles.add}>{addText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodTile;

const Styles = ScaledSheet.create({
  container: {
    display: 'flex',
    marginTop: '10@s',
    marginHorizontal: '10@s',
    borderRadius: '10@s',
    backgroundColor: 'rgba(240, 245, 249, 0.15)',
    justifyContent: 'space-between',
  },

  tile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '10@s',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  right: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 10,
    marginVertical: 10,
    flexBasis: 80,
  },
  add: {
    color: '#E5251A',
    fontSize: 20,
    fontWeight: '700',
  },
});

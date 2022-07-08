import { NavigationContainer, TabRouter } from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {ItemBox} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';

const Home: FC = () => {

  const [items, setItems] = useState([
    {name: 'Pizza'},
    {name: "Salad's Bar"},
    {name: 'Kebab Plate'},
    {name: "Fish N Chip's"},
    
  ]);

  const Tab = createBottomTabNavigator()
  const itemlist = () => {
    return items.map ((item)=> {
      return (
        <View style={{marginTop: scale(-40)}}>
          <ItemBox
            name={item.name}
            image="https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fpizza.png?alt=media&token=ecee7240-c9a4-422e-87a5-940dac6999cb"
          />
        </View>
      );
    })
  }
  return (
    <ScrollView>
      <View style={[Styles.container, {marginTop: scale(100)}]}>
        {itemlist()}
      </View>
      {/* <View style={{height: scale(70), backgroundColor: 'white',width: scale(375), }}></View> */}
    </ScrollView>
  );
};

export default Home;

const Styles = ScaledSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '180@s',
    backgroundColor: 'grey'
  },
});

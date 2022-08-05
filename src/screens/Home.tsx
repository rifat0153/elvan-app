import React, {FC} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Cart, ItemBox} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {UseFoodStore} from '../zustand/FoodMenuList';
import {UseCategoriesStore} from '../zustand/Categories';
import FetchAllData from '../database/FetchAllData';
import Category from '../interfaces/Category';
import AppBackground from '../AppBackground';

type Props = NativeStackScreenProps<RootStackParamList>;
const Height = Dimensions.get('window').height;

const Home: FC<Props> = ({navigation}) => {
  const foodStore = UseFoodStore();
  const categoriesStore = UseCategoriesStore();
  FetchAllData();

  const Show = (item: Category) => {
    if (item.layout == 'ListView') {
      navigation.navigate('FoodList', {category: item.name});
    }

    if (item.layout == 'DetailsView') {
      foodStore.FoodItems.map(food => {
        if (food.category == item.name)
          navigation.navigate('FoodDetails', {
            food,
          });
      });
    }
  };

  // const Tab = createBottomTabNavigator();
  const itemlist = () => {
    return categoriesStore.categories.map(item => {
      return (
        <View style={{marginTop: scale(-40)}} key={item.name}>
          <ItemBox
            key={item.id}
            name={item.name}
            image="https://firebasestorage.googleapis.com/v0/b/restaurantpickup-6d5ee.appspot.com/o/food_images%2Fpizza.png?alt=media&token=ecee7240-c9a4-422e-87a5-940dac6999cb"
            onPress={() => Show(item)}
          />
        </View>
      );
    });
  };
  return (
    <View>
      <AppBackground />
      <View style={Styles.cart}>
        <Cart onPress={() => navigation.navigate('CartList')} />
      </View>
      <ScrollView>
        <View style={Styles.textView}>
          <Text style={Styles.text}>what will you eat today?</Text>
        </View>
        <View style={[Styles.container, {marginTop: scale(100)}]}>
          {itemlist()}
        </View>
        {/* <View style={{height: scale(70), backgroundColor: 'white',width: scale(375), }}></View> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const Styles = ScaledSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '180@s',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#F0F5F9',
    // fontWeight: '800'
    top: '12@s',
    left: '12@s',
  },
  textView: {},

  cart: {
    position: 'absolute',
    top: '540@s',
    left: '264@s',
    zIndex: 1,
  },
});

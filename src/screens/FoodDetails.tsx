import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/NavigationTypes';
import {
  AddOnCheckbox,
  AddtoCartButton,
  IncreaseDecrease,
  DetailsFoodInfo,
  AddOnButton,
} from '../components';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Food from '../interfaces/Food';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {UsePriceQuantityStore} from '../zustand/PriceQuantityStore'; //zustand
import {UseCartStore, CartItem} from '../zustand/CartStore'; //zustand
import {ScrollView} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

type Props = NativeStackScreenProps<RootStackParamList>;

const FoodDetails: FC<Props> = () => {
  const [itemCount, setitemCount] = useState(0);

  const router = useRoute<RouteProp<RootStackParamList, 'FoodDetails'>>();
  const params = router.params;
  const food: Food = params.food;

  const priceQuantityStore = UsePriceQuantityStore();
  const cartStore = UseCartStore();

  const AddToCart = () => {
    const newCartItem: CartItem = {
      food,
      itemCount,
    };

    const found = cartStore.cartItems.find(item => {
      if (newCartItem.food.id == item.food.id) {
        return true;
      }
      return false;
    });

    if (found) {
      cartStore.IncreaseItemCount(food.id, newCartItem.itemCount);
    } else {
      cartStore.AddCartItem(newCartItem);
    }
  };

  useEffect(() => {
    priceQuantityStore.changeQuantity(1);
    priceQuantityStore.changePrice(food.price);
  }, []);

  useEffect(() => {
    setitemCount(priceQuantityStore.quantity);
  }, [priceQuantityStore.quantity]);

  useEffect(() => {
    console.log(cartStore.cartItems);
  }, [cartStore.cartItems]);

  return (
    <ScrollView>
      <View>
        <SharedElement id={food.id}>
          <Image
            style={Styles.image}
            source={{
              uri: food.image,
            }}
          />
        </SharedElement>
        <View style={Styles.lowerpart}>
          <DetailsFoodInfo food={food} />

          {/* <AddOnCheckbox
            addonlist={[
              {name: 'Extra Sauce', price: 20},
              {name: 'Extra Cheese', price: 30},
              {name: 'Extra Mayo', price: 20},
              {name: 'Extra Fries', price: 30},
            ]}
           
          /> */}
          <AddOnButton
            headerText="Choose Your Sauce"
            itemlist={['Garlic', 'Tomato', 'Classic', 'Special']}
          />

          <View>
            <AddtoCartButton
              title="Add to cart"
              left={
                (
                  priceQuantityStore.price * priceQuantityStore.quantity
                ).toString() + 'Kr'
              }
              right={priceQuantityStore.quantity?.toString()}
              onPress={() => AddToCart()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetails;

const Styles = ScaledSheet.create({
  image: {
    width: '350@s',
    height: '340@s',
    resizeMode: 'contain',
    backgroundColor: 'rgba(52, 52, 52, 0.15)',
    marginTop: 0,
  },
  lowerpart: {
    backgroundColor: '#F0F5F9',
    borderRadius: 10,
    paddingHorizontal: '10@s',
    paddingTop: '18@s',
  },
});

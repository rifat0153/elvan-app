import Food from '../interfaces/Food';

export type RootStackParamList = {
  FoodList: {category: string};
  FoodTile: undefined;
  FoodDetails: {food: Food};
  Home: undefined;
  Profile: undefined;
  Favorites: undefined;
  OrderList: undefined;
  BottomNav: undefined;
  CartList: undefined;
  MakePayment: undefined;
  TrackOrder: undefined;
};

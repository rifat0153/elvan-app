import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {RootStackParamList} from './NavigationTypes';
import {FoodList, FoodDetails, CartList, MakePayment, TrackOrder} from '../screens';
import BottomNav from './BottomNav';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const AppStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNav">
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FoodList" component={FoodList} options={{}} />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        sharedElements={route => {
          return [route.params.food.id];
        }}
        options={() => ({
          headerShown: false,
          gestureEnabled: true,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {opacity: progress},
            };
          },
        })}
      />
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen name="MakePayment" component={MakePayment} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
    </Stack.Navigator>
  );
};

export default AppStack;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import MainNav from './src/navigation/MainNav';
import './src/database/Firebase';
import 'react-native-gesture-handler';
import {Cart} from './src/components';
import {View} from 'react-native';
import { FoodList } from './src/screens';

export default function App() {
  return <MainNav/>;
}

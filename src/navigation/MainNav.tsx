import React, {FC, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const MainNav: FC = () => {
    const [user, setUser] = useState();

  return (
    <NavigationContainer>
      {user == null ? <AuthStack /> : <AppStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default MainNav;

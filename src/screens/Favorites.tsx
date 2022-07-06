import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Favorites: FC = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Favorites Screen</Text>
    </View>
  );
};

export default Favorites;

const Styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#2A2630',
  },
});

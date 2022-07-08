import React, { FC } from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Profile : FC = () => {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Profile Screen</Text>
      </View>
    );
}

export default Profile;

const Styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#2A2630',
  },
});
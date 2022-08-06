import React, {FC} from 'react';
import {View, TextInput, Dimensions, StyleSheet, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('screen');

interface Props {
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  label: string;
  iconName?: string;
  error: string;
}

const TextField: FC<Props> = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{props.label}</Text>
      <TextInput
        style={[
          Styles.input,
          {borderBottomColor: props.error ? '#E5251A' : '#A9A9A9'},
        ]}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
        keyboardType={props.label=="Phone Number"?"numeric":"name-phone-pad"}
      />
      <Text style={Styles.error}>{props.error}</Text>
    </View>
  );
};

export default TextField;

const Styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    alignSelf: 'center',
    marginBottom: scale(35),
  },

  text: {
    color: '#A9A9A9',
    fontSize: 12,
    // fontWeight: '300',
    top: 7,
  },
  input: {
    color: '#F0F5F9',
    fontSize: 14,
    borderBottomWidth: 1,
  },
  error: {
    fontSize: 11,
    color: '#FF0000',
    fontFamily: 'Poppins',
  },
});

import {stringLength} from '@firebase/util';
import React, {FC, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';

interface Props {
  focus: boolean;
  text: string;
  focusIcon: object;
  nonFocusIcon: object;
}
const BottonNavButton: FC<Props> = props => {
  const focusButton = (focused: boolean) => {
    if (focused) {
      return (
        <View>
          <View style={Styles.focusContainer}>
            <Image style={Styles.image} source={props.focusIcon} />
            <Text style={Styles.text}>{props.text}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Image style={Styles.image} source={props.nonFocusIcon} />
        </View>
      );
    }
  };
  return <View>{focusButton(props.focus)}</View>;
};

export default BottonNavButton;

const Styles = ScaledSheet.create({
  focusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: '48@s',
    width: '130@s',
    borderColor: '#E5251A',
    borderRadius: 5,
    borderWidth: 1,
  },

  image: {
    height: '25.28@s',
    width: '27.93@s',
    resizeMode: 'contain',
  },

  text: {
    color: '#E5251A',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '14.07@s',
  },
});

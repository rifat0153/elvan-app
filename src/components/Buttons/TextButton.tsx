import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';

interface Props {
  text: string;
  height: number;
  width: number;
  color: string;
  bcolor: string;
  onPress?: ()=> void
}
const TextButton: FC<Props> = props => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
      style={[
        {
          backgroundColor: props.bcolor,
          height: scale(props.height),
          width: scale(props.width),
        },
        Styles.container,
      ]}>
      <Text style={[Styles.text, {color: props.color}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const Styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: '700',
    fontSize: '16@s',
    fontFamily: 'Poppins',
  },
});

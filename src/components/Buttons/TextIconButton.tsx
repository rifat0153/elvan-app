import React, {FC, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {RadioButton} from '../../components';

interface Props {
  text: string;
  leftIcon: {};
  rightIcon?: {};
  expand?: boolean;
  onPress: () => void;
}

const transition = (
  <Transition.Together>
    <Transition.In type="slide-left" durationMs={400} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={300} />
  </Transition.Together>
);

const TextIconButton: FC<Props> = props => {
  const [selectedItem, setSelectedItem] = useState('');
  const [addresses, setAddresses] = useState<Array<object>>([
    {address: 'Sreepur, Gazipur', category: 'Home'},
    {address: 'Kuratoli, Dhaka', category: 'Work'},
  ]);
  const ref = React.useRef<any>();

  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={[
        {marginTop: scale(20)},
        Styles.rectangle,
        !props.expand ? {height: scale(50)} : null,
      ]}>
      <TouchableOpacity
        onPress={() => {
          ref.current.animateNextTransition();
          props.onPress();
        }}
        activeOpacity={0.5}>
        <View
          style={[
            Styles.container,
            props.expand ? {marginTop: scale(13)} : null,
          ]}>
          <Image
            source={props.leftIcon}
            style={Styles.leftImage}
            resizeMode="contain"
          />
          <Text style={Styles.text}>{props.text}</Text>
          {props.rightIcon ? (
            <Image
              source={props.rightIcon}
              style={Styles.rightImage}
              resizeMode="contain"
            />
          ) : null}
        </View>
      </TouchableOpacity>
      {props.expand ? (
        <View>
          <Text style={Styles.expandTitle}>Addresses</Text>

          <TouchableOpacity
            style={{marginBottom: scale(11), flexDirection: 'row'}}
            onPress={() => {
              setSelectedItem('1');
            }}>
            <View>
              <Text style={[Styles.expandItem, {fontSize: 10}]}>Home</Text>
              <Text style={[Styles.expandItem, {fontSize: 14}]}>
                Sreepur, Gazipur
              </Text>
            </View>
            <View style={Styles.radioButton}>
              {selectedItem == '1' ? <RadioButton selected /> : <RadioButton />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginBottom: scale(11), flexDirection: 'row'}}
            onPress={() => {
              setSelectedItem('2');
            }}>
            <View>
              <Text style={[Styles.expandItem, {fontSize: 10}]}>Home</Text>
              <Text style={[Styles.expandItem, {fontSize: 14}]}>
                Sreepur, Gazipur
              </Text>
            </View>
            <View style={Styles.radioButton}>
              {selectedItem == '2' ? <RadioButton selected /> : <RadioButton />}
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </Transitioning.View>
  );
};

export default TextIconButton;

const Styles = ScaledSheet.create({
  rectangle: {
    // height: '50@s',
    width: '323@s',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(240, 245, 249, 0.15)',
    // flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '10@s',
  },
  leftImage: {
    height: '24@s',
    width: '30@s',
  },
  rightImage: {
    height: '15@s',
    width: '10@s',
    alignSelf: 'center',
    right: 10,
    position: 'absolute',
  },
  text: {
    color: '#F0F5F9',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginLeft: '15@s',
    alignSelf: 'center',
  },
  expandTitle: {
    marginHorizontal: scale(10),
    marginTop: scale(6),
    marginBottom: scale(6),
    fontSize: 14,
    color: '#F0F5F9',
  },

  expandItem: {
    marginHorizontal: scale(10),
    color: '#F0F5F9',
  },
  radioButton: {
    alignSelf: 'center',
    right: 35,
    position: 'absolute',
  },
});

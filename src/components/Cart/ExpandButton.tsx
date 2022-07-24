import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, {FC, useEffect, useRef, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import DatePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {TextIconButton} from '../../components';

const ExpandButton: FC = () => {
  const [expandCard, setExpandCard] = useState<boolean>(false);
  const [expandLoc, setExpandLoc] = useState<boolean>(false);

  return (
    <View>
      <View style={{marginTop: scale(20)}}>
        <TextIconButton
          text="Choose Payment method"
          leftIcon={require('../../../assets/icons/card.png')}
          rightIcon={
            expandCard
              ? require('../../../assets/icons/uparrow.png')
              : require('../../../assets/icons/downarrow.png')
          }
          onPress={() => setExpandCard(!expandCard)}
          expand={expandCard}
        />
        <TextIconButton
          text="Choose address"
          leftIcon={require('../../../assets/icons/location.png')}
          rightIcon={
            expandLoc
              ? require('../../../assets/icons/uparrow.png')
              : require('../../../assets/icons/downarrow.png')
          }
          onPress={() => setExpandLoc(!expandLoc)}
          expand={expandLoc}
        />
      </View>
    </View>
  );
};

export default ExpandButton;

const Styles = ScaledSheet.create({
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
    right: -133,
  },
  text: {
    color: '#F0F5F9',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginLeft: '15@s',
    alignSelf: 'center',
  },
  rectangle: {
    height: '50@s',
    width: '323@s',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '20@s',
    borderRadius: 5,
    backgroundColor: 'rgba(240, 245, 249, 0.15)',
  },
});

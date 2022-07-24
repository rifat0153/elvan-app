import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, {FC, useEffect, useRef, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import DatePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {TextIconButton} from '../../components';
import {Transition, Transitioning} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type="slide-left" durationMs={300} />
    <Transition.Change />
    <Transition.Out type="slide-right" durationMs={300} />
  </Transition.Together>
);
const Schedule: FC = () => {
  const [date, setDate] = useState(new Date()); //initialize by today's date;
  const [mode, setMode] = useState<'date' | 'time'>('date'); //For change between time and date mode;
  const [show, setShow] = useState(false); //whether we want to show the box or not;
  const [textDate, setTextDate] = useState(
    Moment(date).format('dddd, Do MMMM YYYY'),
  );
  const [textTime, setTextTime] = useState(Moment(date).format('hh:mm A'));

  const [schedule, setSchedule] = useState<boolean>(false);
  const ref = useRef<any>();

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    let tempDate = new Date(currentDate);
    if (mode == 'date') {
      let fDate = Moment(tempDate).format('dddd, Do MMMM YYYY');
      setTextDate(fDate);
    } else {
      setTextTime(Moment(tempDate).format('hh:mm A'));
    }
    setShow(false);
    setDate(currentDate);
  };
  const ShowMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={{marginTop: scale(20)}}>
      {!schedule ? (
        <TouchableOpacity
          onPress={() => {
            setSchedule(!schedule);
            ref.current.animateNextTransition();
          }}>
          <View style={Styles.scheduleTextView}>
            <Text style={Styles.schedule}>I want to Schedule</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <TextIconButton
            text={textDate}
            leftIcon={require('../../../assets/icons/calender.png')}
            onPress={() => ShowMode('date')}
          />

          <TextIconButton
            text={textDate}
            leftIcon={require('../../../assets/icons/clock.png')}
            onPress={() => ShowMode('date')}
          />

          <TouchableOpacity
            onPress={() => {
              setSchedule(!schedule);
              ref.current.animateNextTransition();
            }}>
            <View style={Styles.scheduleTextView}>
              <Text style={Styles.schedule}>Don't want to Schedule</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {show && (
        <DatePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </Transitioning.View>
  );
};

export default Schedule;

const Styles = ScaledSheet.create({
  scheduleTextView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '15@s',
    marginRight: '16@s'
  },
  schedule: {
    color: '#E5251A',
    fontSize: '14@s',
    borderBottomWidth: '0.5@s',
    borderBottomColor: '#E5251A',
  },
});

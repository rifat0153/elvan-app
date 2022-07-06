import {isEmpty} from '@firebase/util';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {UseAddOnStore} from '../zustand/AddOnStore';
import TextButton from './TextButton';

interface Props {
  headerText: string;
  itemlist: string[];
}

const AddOnButton: FC<Props> = props => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const useAddOnStore = UseAddOnStore();

  useEffect(() => {
    useAddOnStore.AddOneItem({name: selectedItem});
  }, [selectedItem]);

  const Buttonlist = () => {
    return props.itemlist.map(item => {
      return (
        <View style={{marginLeft: 20, marginBottom: 21}}>
          <TextButton
            text={item}
            height={35}
            width={120}
            color={selectedItem != item ? '#2A2630' : '#F0F5F9'}
            bcolor={selectedItem != item ? '#E5251A4D' : '#E5251A'}
            onPress={() => setSelectedItem(item)}
          />
        </View>
      );
    });
  };
  return (
    <View>
      <Text style={Styles.text}>{props.headerText}</Text>
      <View style={Styles.items}>{Buttonlist()}</View>
    </View>
  );
};

export default AddOnButton;

const Styles = ScaledSheet.create({
  items: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: -20,
    alignItems: 'center',
  },

  text: {
    color: '#2A2630',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: '20@s',
  },
});

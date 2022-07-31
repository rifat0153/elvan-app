import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import {UseModalStore} from '../../zustand/ModalVisible';
import Slider from '@react-native-community/slider';
import {TextButton} from '../../components';

const Sort: FC = props => {
  const modalStore = UseModalStore();
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [val, setVal] = useState(0);

  const [sortBy, setSortBy] = useState(['Meat', 'Vegan']);
  const [selectedSortBy, setSelectedSortBy] = useState<string>('');

  const [priceRange, setPriceRange] = useState(['Low to High', 'High to Low']);
  const [selectedPR, setSelectedPR] = useState<string>('');

  const SortOptions = () => {
    return sortBy.map(item => {
      return (
        <View style={{marginLeft: 20, marginBottom: 21}}>
          <TextButton
            text={item}
            height={35}
            width={120}
            color={selectedSortBy != item ? '#2A2630' : '#F0F5F9'}
            bcolor={selectedSortBy != item ? '#E5251A4D' : '#E5251A'}
            onPress={() => setSelectedSortBy(item)}
          />
        </View>
      );
    });
  };

  const PriceOptions = () => {
    return priceRange.map(item => {
      return (
        <View style={{marginLeft: 20, marginBottom: 21}}>
          <TextButton
            text={item}
            height={35}
            width={120}
            color={selectedPR != item ? '#2A2630' : '#F0F5F9'}
            bcolor={selectedPR != item ? '#E5251A4D' : '#E5251A'}
            onPress={() => setSelectedPR(item)}
          />
        </View>
      );
    });
  };

  return (
    <View>
      <Modal isVisible={modalStore.isModalVisible}>
        <View style={Styles.rectangle}>
          <TouchableOpacity onPress={() => modalStore.ModalVisibility(false)}>
            <Image
              source={require('../../../assets/icons/exit.png')}
              style={{
                height: scale(12),
                width: scale(12),
                resizeMode: 'contain',
                position: 'absolute',
                right: 10,
                bottom: 0,
              }}
            />
          </TouchableOpacity>

          {/* /////////sortby-start/////// */}
          <Text style={Styles.optionTitle}>Sort by</Text>
          <View style={[Styles.flexRow, {marginLeft: -20}]}>
            {SortOptions()}
          </View>
          {/* /////////sortby-end/////// */}

          {/* /////////price-start/////// */}
          <Text style={Styles.optionTitle}>Price</Text>
          <View style={[Styles.flexRow, {marginLeft: -20}]}>
            {PriceOptions()}
          </View>
          {/* /////////price-end/////// */}

          {/* /////////slider-start/////// */}
          <Text style={Styles.optionTitle}>Price range</Text>
          <View style={Styles.flexRow}>
            <Text style={[Styles.val, {marginRight: scale(25)}]}>{minVal}</Text>
            <Slider
              style={{transform: [{scaleY: 2}], width: scale(190)}}
              minimumValue={minVal}
              maximumValue={maxVal}
              minimumTrackTintColor="#E5251A"
              maximumTrackTintColor="#747276"
              thumbTintColor="#E5251A"
              onValueChange={value => setVal(value)}
            />
            <Text style={[Styles.val, {marginLeft: scale(25)}]}>{maxVal}</Text>
          </View>
          {/* /////////slider-end/////// */}
          <View style={Styles.apply}>
            <TextButton
              text="Apply"
              height={50}
              width={138}
              color="#F0F5F9"
              bcolor="#E5251A"
              onPress={() => '#'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Sort;

const Styles = ScaledSheet.create({
  rectangle: {
    height: '333@s',
    width: '318@s',
    backgroundColor: 'rgba(240, 245, 249, 0.8)',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  optionTitle: {
    color: '#2A2630',
    fontSize: 14,
    fontWeight: 'normal',
    alignSelf: 'center',
    marginBottom: scale(14),
  },

  val: {
    color: '#2A2630',
    fontWeight: '800',
    fontSize: 16,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  apply: {
    alignSelf: 'center',
    marginTop: '20@s',
  },
});

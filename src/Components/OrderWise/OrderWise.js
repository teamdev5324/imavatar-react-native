import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './orderwisestyle';
import Positive from '../Positive/Positive';
import Neutral from '../Neutral/Neutral';
import Negative from '../Negative/Negative';
import AllRatings from '../AllRatings/AllRatings';

const OrderWise = () => {
  const data = ['Most Recent', 'Last Week', 'Last Month', 'Last Year'];

  const [btnclick, setBtnClick] = useState('All Ratings');

  const renderOrderWiseComp = type => {
    if (type === 'All Ratings') {
      return <AllRatings />;
    }

    if (type === 'Positive') {
      return <Positive />;
    }

    if (type === 'Neutral') {
      return <Neutral />;
    }

    if (type === 'Negative') {
      return <Negative />;
    }
  };

  return (
    <View>
      <View style={styles.filterselectcontainer}>
        <Text style={styles.ordertext}>Filter by:</Text>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={data}
          defaultButtonText={'Select Duration'}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={12}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
        />

        <Pressable style={styles.resetbutton}>
          <Text style={styles.resetbuttontext}>Reset</Text>
        </Pressable>
      </View>

      <View style={styles.downloadbtnhead}>
        <Pressable style={styles.resetbutton}>
          <Text style={styles.resetbuttontext}>Download</Text>
        </Pressable>
      </View>

      <View style={styles.productinfobtnbox}>
        <TouchableOpacity
          onPress={() => setBtnClick('All Ratings')}
          style={styles.productinfobtn}>
          <Text
            style={
              btnclick === 'All Ratings'
                ? styles.pinfobtntextcolor
                : styles.btntext
            }>
            All Ratings
          </Text>
          <Image
            style={styles.infoicon}
            source={require('../../assets/Icons/info.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setBtnClick('Positive')}
          style={[
            styles.productinfobtn,
            {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
          ]}>
          <Text
            style={
              btnclick === 'Positive'
                ? styles.pinfobtntextcolor
                : styles.btntext
            }>
            Positive
          </Text>
          <Image
            style={styles.infoicon}
            source={require('../../assets/Icons/info.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setBtnClick('Neutral')}
          style={[
            styles.productinfobtn,
            {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
          ]}>
          <Text
            style={
              btnclick === 'Neutral' ? styles.pinfobtntextcolor : styles.btntext
            }>
            Neutral
          </Text>
          <Image
            style={styles.infoicon}
            source={require('../../assets/Icons/info.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setBtnClick('Negative')}
          style={[
            styles.productinfobtn,
            {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
          ]}>
          <Text
            style={
              btnclick === 'Negative'
                ? styles.pinfobtntextcolor
                : styles.btntext
            }>
            Negative
          </Text>
          <Image
            style={styles.infoicon}
            source={require('../../assets/Icons/info.png')}
          />
        </TouchableOpacity>
      </View>

      {renderOrderWiseComp(btnclick)}
    </View>
  );
};

export default OrderWise;

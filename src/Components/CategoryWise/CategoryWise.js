import {View, Text, Pressable} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './categorywisestyle';
import OrderWiseCompBox from '../OrderWiseCompBox/OrderWiseCompBox';

const CategoryWise = () => {
  const data = ['Most Recent', 'Last Week', 'Last Month', 'Last Year'];

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

      <View style={styles.downloadselecthead}>
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
      </View>

      <View style={styles.downloadbtnhead}>
        <Pressable style={styles.resetbutton}>
          <Text style={styles.resetbuttontext}>Download</Text>
        </Pressable>
      </View>

      <OrderWiseCompBox
        headone="Sr. No."
        headtwo="Category"
        headthree="Product Title"
        headfour="Average Ratings"
        headfive="Action"
        headsix="Count of Reviews or Ratings"
        serialnotext="1"
        orderdatetext="Yantras"
        orderidtext="Evil locket"
        categorytext="3"
        producttitletext="View all"
        Imageyellow={require('../../assets/Icons/followeryellow.png')}
        Imagewhite={require('../../assets/Icons/followerwhite.png')}
        ratingtext="Quality of locket is ordinary"
        orange="orange"
        noratingimg="no rating"
        counttext="40"
      />
      <OrderWiseCompBox
        headone="Sr. No."
        headtwo="Category"
        headthree="Product Title"
        headfour="Average Ratings"
        headfive="Action"
        headsix="Count of Reviews or Ratings"
        serialnotext="1"
        orderdatetext="Yantras"
        orderidtext="Evil locket"
        categorytext="3"
        producttitletext="View all"
        Imageyellow={require('../../assets/Icons/followeryellow.png')}
        Imagewhite={require('../../assets/Icons/followerwhite.png')}
        ratingtext="Quality of locket is ordinary"
        orange="orange"
        noratingimg="no rating"
        counttext="40"
      />
    </View>
  );
};

export default CategoryWise;

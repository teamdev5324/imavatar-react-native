import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './neutralstyle';
import OrderWiseCompBox from '../OrderWiseCompBox/OrderWiseCompBox';

const Neutral = () => {
  const neutralselectdata = [
    'Operations Manager',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  return (
    <View>
      <View style={styles.detailstextbox}>
        <Text style={styles.transtext}>Transaction details</Text>

        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={neutralselectdata}
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

      <OrderWiseCompBox
        headone="Sr. No."
        headtwo="Order Date"
        headthree="Order ID"
        headfour="Category"
        headfive="Product Title"
        headsix="Ratings & Reviews"
        serialnotext="1"
        orderdatetext="19-09-2022"
        orderidtext="10001"
        categorytext="Yantras"
        producttitletext="Evil eye locket"
        Imageyellow={require('../../assets/Icons/followeryellow.png')}
        Imagewhite={require('../../assets/Icons/followerwhite.png')}
        ratingtext="This is really a good product"
      />
      <OrderWiseCompBox
        headone="Sr. No."
        headtwo="Order Date"
        headthree="Order ID"
        headfour="Category"
        headfive="Product Title"
        headsix="Ratings & Reviews"
        serialnotext="2"
        orderdatetext="19-09-2022"
        orderidtext="10001"
        categorytext="Yantras"
        producttitletext="8 inch Metal Ganeshji Idol"
        Imageyellow={require('../../assets/Icons/followeryellow.png')}
        ratingtext="This is really a good product"
      />
    </View>
  );
};

export default Neutral;

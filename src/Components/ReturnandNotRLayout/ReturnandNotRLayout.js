import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './returnandnotrlayoutstyle';

const ReturnandNotRLayout = ({children}) => {
  const [searchtext, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.ordersearchbox}>
        <TextInput
          style={styles.searchinput}
          placeholder="Search Order ID, IMA SKU ID"
          value={searchtext}
          onChangeText={setSearchText}
        />
        <Image
          style={styles.searchIcon}
          source={require('../../assets/Icons/searchicon.png')}
        />
      </View>

      <View style={styles.datetimebox}>
        <View style={styles.ordercompdatetime}>
          <Text style={styles.datetimetext}>Expected date of return</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/Icons/calendar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.ordercompdatetime}>
          <Text style={styles.datetimetext}>Return created on</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/Icons/calendar.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.typereturncompbox}>
        <View style={styles.typereturninput}>
          <Text style={styles.datetimetext}>Type of return</Text>
          <TouchableOpacity>
            <Image
              style={styles.typereturninputicon}
              source={require('../../assets/Icons/arrow-down.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.typereturnapplybtn}>
          <Text style={styles.typereturnapplybtntext}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.typereturnapplybtn}>
          <Text style={styles.typereturnapplybtntext}>Reset</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};

export default ReturnandNotRLayout;

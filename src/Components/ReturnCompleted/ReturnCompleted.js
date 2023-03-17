import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './returncompletedstyle';
import OrderCompBox from '../OrderCompBox/OrderCompBox';

const ReturnCompleted = () => {
  const [searchtext, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.ordercompinput}>
        <Text style={styles.orderinputtext}>Return Completed (0)</Text>

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

      <OrderCompBox
        Orderid="Order ID #0001"
        Sukid="IMA SKU ID"
        metaltext="6 Inch Metal Ganesha idol"
        number="Poo77890"
        date="28-06-2022"
        orderqty="2"
        orderamt="1200.00"
        deliverydate="03-07-2022"
        Pskuid="60015"
        Customertext1="Customer Details"
        Customertextlabel1="Prashant Thakare, Mumbai, MH"
        Customertext2="Order Status"
        Customertextlabel2="Handed over"
        Customertext3="Pick-up Date | Time"
        Customertextlabel3="29-06-2022 18:00 PM"
        color="gray"
      />

      <OrderCompBox
        Orderid="Order ID #0001"
        Sukid="IMA SKU ID"
        metaltext="6 Inch Metal Ganesha idol"
        number="Poo77890"
        date="28-06-2022"
        orderqty="2"
        orderamt="1200.00"
        deliverydate="03-07-2022"
        Pskuid="60015"
        Customertext1="Customer Details"
        Customertextlabel1="Prashant Thakare, Mumbai, MH"
        Customertext2="Order Status"
        Customertextlabel2="Handed over"
        Customertext3="Pick-up Date | Time"
        Customertextlabel3="29-06-2022 18:00 PM"
        color="gray"
      />
    </View>
  );
};

export default ReturnCompleted;

import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ordercompstyle';
import OrderCompBox from '../OrderCompBox/OrderCompBox';

const OrderComp = ({setShow, show}) => {
  const [searchtext, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.ordercompinput}>
        <Text style={styles.orderinputtext}>New Order</Text>

        <View style={styles.ordersearchbox}>
          <TextInput
            style={styles.searchinput}
            placeholder="Search Order ID, IMA SKU ID, Partner SKU ID"
            value={searchtext}
            onChangeText={setSearchText}
          />
          <Image
            style={styles.searchIcon}
            source={require('../../assets/Icons/searchicon.png')}
          />
        </View>
      </View>

      <View style={styles.ordercompdatetime}>
        <Text style={styles.datetimetext}>Order Date</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/Icons/calendar.png')} />
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
        Customertext2="Generate Lable"
        Customertextlabel2="Generate"
        Customertext3="Order Status"
        Customertextlabel3="Update"
        onPress={() => setShow(!show)}
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
        Customertext2="Generate Lable"
        Customertextlabel2="Generate"
        Customertext3="Order Status"
        Customertextlabel3="Update"
      />
    </View>
  );
};

export default OrderComp;

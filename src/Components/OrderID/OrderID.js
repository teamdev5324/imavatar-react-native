import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './orderidstyle';

const OrderID = () => {
  return (
    <View style={styles.orderdetailsorder}>
      <View style={styles.orderdetailshead}>
        <Image
          style={styles.orderdetailsheadicon}
          source={require('../../assets/Icons/filteredit.png')}
        />

        <View style={styles.orderid}>
          <Text style={styles.orderidtext}>Order ID</Text>
          <Image
            style={styles.orderidicon}
            source={require('../../assets/Icons/arrow-down.png')}
          />
        </View>

        <Text style={styles.imagetext}>Image</Text>

        <Text style={styles.imagetext}>Product title</Text>

        <View style={styles.pickup}>
          <Text style={styles.orderidtext}>Pickup date & time</Text>
          <Image
            style={styles.orderidicon}
            source={require('../../assets/Icons/arrow-down.png')}
          />
        </View>
      </View>

      <View style={styles.orderdetailsbottom}>
        <Text style={styles.textsize}>1234</Text>
        <Image
          style={styles.orderdetailsbottomimg}
          source={require('../../assets/Images/orderdetailsbottomone.png')}
        />
        <Text style={styles.orderdetailsbottomtext}>Agarbati</Text>
        <Text style={styles.textsize}>23/06/2022 | 6:30 PM</Text>
        <Text style={styles.orderdetailsbottomtwotext}>See more</Text>
      </View>
    </View>
  );
};

export default OrderID;

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './sucessfulltranspopupstyle';
import TransOrderBox from '../TransOrderBox/TransOrderBox';
import TransInvoiceBox from '../TransInvoiceBox/TransInvoiceBox';
import TransListComp from '../TransListComp/TransListComp';

const SucessfullTransPopup = ({onPress}) => {
  return (
      <View style={styles.orderdetailshead}>
          <View style={styles.orderdetailspopup}>
              <View style={styles.orderdetailspopupinner}>

                  <Text style={styles.firsttext}>Order Details</Text>

                  <TransOrderBox label1="" label2="" label3="" label4="" label5="" detail1="0001" detail2="8 Inch Ganeshji idol" detail3="1" detail4="1200" detail5="28-08-2022 17:04 PM"/>
                  
                  <Text style={styles.firsttext}>Invoice Details</Text>

                  <TransInvoiceBox detail1="CG/08/22/0001" detail2="28-08-2022 17:04 PM" detail3="Aditya Singh" detail4="Banglore" detail5="1260" />

                  <TransListComp/>

                  <TouchableOpacity style={styles.closebtn} onPress={onPress}>
                      <Text style={styles.closebtntext}>Close</Text>
                  </TouchableOpacity>

              </View>
          </View>
      </View>
  )
}

export default SucessfullTransPopup
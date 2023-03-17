import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './paymentcompboxstyle';

const PaymentCompBox = ({ onPress }) => {

  return (
      <View style={styles.paymentcompbox}>

          <View style={styles.invoicedonhead}>
              <View style={[styles.orderquantheaditem, styles.invoicedonheadone]}>
                  <Text style={styles.orderquantblack}>Invoiced On</Text>
                  <Text style={styles.orderquantgray}>280802022 |{"\n"}17:04 PM</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.invoicedonheadtwo]}>
                  <Text style={styles.orderquantblack}>Order ID</Text>
                  <Text style={styles.orderquantgray}>0001</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.invoicedonheadthree]}>
                  <Text style={styles.orderquantblack}>Transaction ID</Text>
                  <Text style={styles.orderquantgray}>PP27901001</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.invoicedonheadfour]}>
                  <Text style={styles.orderquantblack}>Order Amount</Text>
                  <Text style={styles.orderquantgray}>1200</Text>
              </View>
          </View>

          <View style={styles.actionboxhead}>
              <View style={[styles.orderquantheaditem, styles.invoicedonheadone]}>
                  <Text style={styles.orderquantblack}>My Earnings</Text>
                  <Text style={styles.orderquantgray}>1005</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.actionboxheadtwo]}>
                  <Text style={styles.orderquantblack}>Payment{"\n"}Mode</Text>
                  <Text style={styles.orderquantgray}>Prepaid</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.actionboxheadthree]}>
                  <Text style={styles.orderquantblack}>Invoice</Text>
                  <Text style={styles.orderquantgray}>CG/08/22/0001</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.actionboxheadfour]}>
                  <Text style={styles.orderquantblack}>Action</Text>
                  <TouchableOpacity onPress={onPress}>
                      <Text style={styles.orderquantorg}>View</Text>
                  </TouchableOpacity>  
              </View>
          </View>
      </View>
  )
}

export default PaymentCompBox
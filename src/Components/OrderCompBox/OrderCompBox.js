import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './ordercompboxstyle';

const OrderCompBox = ({ Orderid, Sukid, metaltext, number, date, orderqty, orderamt, deliverydate, Pskuid, Customertext1, Customertextlabel1, Customertext2, Customertextlabel2, Customertext3, Customertextlabel3, color, bordernone, onPress}) => {
  return (
      <View style={styles.ordercompbox}>
          <View style={styles.orderidbox}>
              <Text style={[styles.orderidtext, styles.textcolor]}>{Orderid}</Text>
              <Text style={styles.skuidtext}>{Sukid}</Text>
          </View>

          <View style={styles.metaltextbox}>
              <Text style={styles.orderidtext}>{metaltext}</Text>
              <Text style={styles.metalnumtext}>{number}</Text>
          </View>

          <Text style={styles.orderdatetext}>Order Date: <Text style={styles.orderdate}>{date}</Text></Text>

          <View style={styles.orderquanthead}>
              <View style={[styles.orderquantheaditem, styles.orderquantheadone]}>
                  <Text style={styles.orderquantblack}>Order Qty.</Text>
                  <Text style={styles.orderquantgray}>{orderqty}</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.orderquantheadtwo]}>
                  <Text style={styles.orderquantblack}>Order Amount</Text>
                  <Text style={styles.orderquantgray}>{orderamt}</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.orderquantheadthree]}>
                  <Text style={styles.orderquantblack}>Expected Delivery date</Text>
                  <Text style={styles.orderquantgray}>{deliverydate}</Text>
              </View>

              <View style={[styles.orderquantheaditem, styles.orderquantheadfour]}>
                  <Text style={styles.orderquantblack}>Partner SKU ID</Text>
                  <Text style={styles.orderquantgray}>{Pskuid}</Text>
              </View>
          </View>

          <View style={styles.ordercustthead}>
              <View style={bordernone === "yes" ? styles.ordercustheaditembnone : styles.ordercustheaditemone}>
                  <Text style={[styles.orderquantblack, styles.ordercusttextmar]}>{Customertext1}</Text>
                  <Text style={styles.orderquantgray}>{Customertextlabel1}</Text>
              </View>

              <View style={bordernone === "yes" ? styles.ordercustheaditembnonetwo : styles.ordercustheaditemtwo}>
                  <Text style={[styles.orderquantblack, styles.ordercusttextmar]}>{Customertext2}</Text>
                  {color === "gray" ?
                      <Text style={styles.orderquantgray}>{Customertextlabel2}</Text> :

                      <TouchableOpacity>
                          <Text style={styles.orderquantorg}>{Customertextlabel2}</Text>
                      </TouchableOpacity>
                  }
              </View>

              <View style={bordernone === "yes" ? styles.ordercustheaditemthreenone : styles.ordercustheaditemthree}>
                  <Text style={[styles.orderquantblack, styles.ordercusttextmar]}>{Customertext3}</Text>
                  {color === "gray" ?
                      <Text style={styles.orderquantgray}>{Customertextlabel3}</Text> :

                      <TouchableOpacity onPress={onPress}>
                          <Text style={styles.orderquantorg}>{Customertextlabel3}</Text>
                      </TouchableOpacity>
                  }
              </View>

          </View>
      </View>
  )
}

export default OrderCompBox
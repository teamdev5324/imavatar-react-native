import { View, Text } from 'react-native'
import React from 'react'
import styles from './translistcompstyle';

const TransListComp = () => {
  return (
      <View style={styles.transactiondetailhead}>
          <Text style={styles.transactiondetailtext}>Transaction Details</Text>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 89 }}>Transaction ID</Text>
              <Text>PP27901001</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 73 }}>Transaction Date</Text>
              <Text>05-09-2022 | 17.00 PM</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 92 }}>Order Amount</Text>
              <Text>Rs. 1200</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 68 }}>Commission Fees</Text>
              <Text>Rs. 50</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 68 }}>Convenience Fees</Text>
              <Text>Rs. 10</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 94 }}>Shipping Fees</Text>
              <Text>Rs. 15</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 121 }}>Total GST</Text>
              <Text>Rs. 100</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 156 }}>TDS</Text>
              <Text>Rs. 10</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 156 }}>TCS</Text>
              <Text>Rs. 10</Text>
          </View>

          <View style={styles.transactiondetailtextbox}>
              <Text style={{ marginRight: 106 }}>My Earnings</Text>
              <Text>Rs. 1005</Text>
          </View>
      </View>
  )
}

export default TransListComp
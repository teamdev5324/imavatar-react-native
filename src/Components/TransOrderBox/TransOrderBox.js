import { View, Text } from 'react-native';
import React from 'react';
import styles from './transorderboxstyle';

const TransOrderBox = ({ detail1, detail2, detail3, detail4, detail5 }) => {
  return (
      <View style={styles.popupinnerone}>
          <View style={styles.popupinneronefirst}>
              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Order ID</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Product Title</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Order Quantity</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Per Unit Price</Text>
              </View>

              <View style={styles.popupinnerfirstbox}>
                  <Text style={styles.fontweightbold}>Order Date</Text>
              </View>
          </View>

          <View style={styles.popupinneronesec}>
              <View style={[styles.popupinnersecbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontcolorgray}>{detail1}</Text>
              </View>

              <View style={[styles.popupinnersecbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontcolorgray}>{detail2}</Text>
              </View>

              <View style={[styles.popupinnersecbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontcolorgray}>{detail3}</Text>
              </View>

              <View style={[styles.popupinnersecbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontcolorgray}>{detail4}</Text>
              </View>

              <View style={styles.popupinnersecbox}>
                  <Text style={styles.fontcolorgray}>{detail5}</Text>
              </View>
          </View>
      </View>
  )
}

export default TransOrderBox
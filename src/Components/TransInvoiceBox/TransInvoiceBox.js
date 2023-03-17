import { View, Text } from 'react-native';
import React from 'react';
import styles from './transinvoiceboxstyle';

const TransInvoiceBox = ({ detail1, detail2, detail3, detail4, detail5 }) => {
  return (
      <View style={styles.popupinnerone}>
          <View style={styles.popupinneronefirst}>
              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Invoice #</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Invoice On</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Bill to Name</Text>
              </View>

              <View style={[styles.popupinnerfirstbox, styles.popupinnerfirstboxborder]}>
                  <Text style={styles.fontweightbold}>Bill to Location</Text>
              </View>

              <View style={styles.popupinnerfirstbox}>
                  <Text style={styles.fontweightbold}>Grand{"\n"}Total</Text>
              </View>
          </View>

          <View style={styles.popupinnertwosec}>
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

export default TransInvoiceBox
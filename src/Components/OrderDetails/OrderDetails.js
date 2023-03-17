import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './orderdetailsstyle';
//import PieChart from 'react-native-expo-pie-chart';
import OrderID from '../OrderID/OrderID';

const OrderDetails = () => {
  return (
    <View>
      <OrderID />

      <View style={styles.orderdetailsstate}>
        <View style={styles.orderdetailsstatehead}>
          <Image
            style={styles.orderdetailsheadicon}
            source={require('../../assets/Icons/filteredit.png')}
          />
          <Text style={styles.statetext}>State wise Order data</Text>
        </View>

        <View>
          <View style={styles.orderdetailsstatebtop}>
            <Text style={styles.statebtext}>State</Text>
            <Text style={styles.statebtext}>No. of Orders sold</Text>
          </View>

          <View style={[styles.stateline, {backgroundColor: '#F8F8F8'}]}>
            <Text style={styles.statelinetext}>Gujarat</Text>
            <Text style={styles.statelinetext}>3600</Text>
          </View>

          <View style={[styles.stateline, {backgroundColor: '#FFF'}]}>
            <Text style={styles.statelinetext}>Maharashtra</Text>
            <Text style={styles.statelinetext}>1300</Text>
          </View>

          <View style={[styles.stateline, {backgroundColor: '#F8F8F8'}]}>
            <Text style={styles.statelinetext}>Tamil Nadu</Text>
            <Text style={styles.statelinetext}>3500</Text>
          </View>

          <View style={[styles.stateline, {backgroundColor: '#FFF'}]}>
            <Text style={styles.statelinetext}>West Bengal</Text>
            <Text style={styles.statelinetext}>2800</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderdetailsstate}>
        <View style={styles.orderdetailsstatehead}>
          <Text style={styles.statetext}>Product Status</Text>
        </View>

        <View style={styles.orderdetailsstatebottom}>
          <View style={[styles.productline, {backgroundColor: '#FFF'}]}>
            <Text style={styles.statelinetext}>Active</Text>
            <Text style={styles.productlinetext1}>68</Text>
            <Text style={styles.productlinevtext}>View all</Text>
          </View>

          <View style={[styles.productline, {backgroundColor: '#F8F8F8'}]}>
            <Text style={styles.statelinetext}>In active</Text>
            <Text style={styles.productlinetext2}>19</Text>
            <Text style={styles.productlinevtext}>View all</Text>
          </View>

          <View style={[styles.productline, {backgroundColor: '#FFF'}]}>
            <Text style={styles.statelinetext}>Out of stock</Text>
            <Text style={styles.productlinetext3}>3500</Text>
            <Text style={styles.productlinevtext}>View all</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderdetailscat}>
        <View style={styles.orderdetailscathead}>
          <Text style={styles.statetext}>Sales by Category</Text>
        </View>

        <View style={styles.statepiechartbox}>
          <View style={styles.statepiechart}>
            {/* <PieChart
              data={[
                {
                  key: 'First Data',
                  count: 20,
                  color: '#F9FE00',
                },
                {
                  key: 'Second Data',
                  count: 20,
                  color: '#939393',
                },
                {
                  key: 'Third Data',
                  count: 60,
                  color: '#FF6658',
                },
              ]}
              length={160}
            /> */}

            <Text style={styles.catcharttext}>Rs. 35.7k</Text>
          </View>

          <View style={styles.charttextbox}>
            <Text style={{color: '#FF0404'}}>Rudraksha</Text>
            <Text style={{color: '#F9FE00'}}>Pooja Samagri</Text>
            <Text style={{color: '#000'}}>Gemstones</Text>
            <Text style={{color: '#FF6658'}}>View all</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './reportsstyle';
import ReportsOrderComp from '../../../Components/ReportsOrderComp/ReportsOrderComp';
import ReportsReturnsComp from '../../../Components/ReportsReturnsComp/ReportsReturnsComp';
import ReviewsRatings from '../../../Components/ReviewsRatings/ReviewsRatings';

const Reports = () => {
  const [reportselement, setReportsElement] = useState('Orders');

  const renderInventoryComp = type => {
    if (type === 'Orders') {
      return <ReportsOrderComp />;
    }

    if (type === 'Returns') {
      return <ReportsReturnsComp />;
    }

    if (type === 'Reviews & Ratings') {
      return <ReviewsRatings />;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.ordercontainer}>
        <View style={styles.dashboardheader}>
          <View style={styles.dashboardlogohead}>
            <Image source={require('../../assets/Icons/menu-icon.png')} />

            <View style={styles.dashboardlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.dashboardlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.dashboardheadertextcontainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => setReportsElement('Orders')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 44}]}>
                  <Text
                    style={
                      reportselement === 'Orders'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Orders
                  </Text>
                  <View
                    style={
                      reportselement === 'Orders' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setReportsElement('Returns')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 44}]}>
                  <Text
                    style={
                      reportselement === 'Returns'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Returns
                  </Text>
                  <View
                    style={
                      reportselement === 'Returns' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setReportsElement('Reviews & Ratings')}>
                <View style={styles.dashboardheadertextheadfinal}>
                  <Text
                    style={
                      reportselement === 'Reviews & Ratings'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Reviews & Ratings
                  </Text>
                  <View
                    style={
                      reportselement === 'Reviews & Ratings' &&
                      styles.dashboardheadertextlinefinal
                    }></View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderInventoryComp(reportselement)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Reports;

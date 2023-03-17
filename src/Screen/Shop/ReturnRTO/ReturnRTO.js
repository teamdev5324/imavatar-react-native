import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './returnrtostyle';
import ReturnInitiated from '../../../Components/ReturnInitiated/ReturnInitiated';
import ReturningToday from '../../../Components/ReturningToday/ReturningToday';
import ReturnCompleted from '../../../Components/ReturnCompleted/ReturnCompleted';

const ReturnRTO = () => {
  const [scrollelement, setScrollElement] = useState('Return Initiated');

  const renderReturnComp = type => {
    if (type === 'Return Initiated') {
      return <ReturnInitiated />;
    }

    if (type === 'Returning Today') {
      return <ReturningToday />;
    }

    if (type === 'Return Completed') {
      return <ReturnCompleted />;
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
              <TouchableOpacity
                onPress={() => setScrollElement('Return Initiated')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 22}]}>
                  <Text style={styles.dashboardheadertext}>
                    Return Initiated (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Return Initiated' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setScrollElement('Returning Today')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 22}]}>
                  <Text style={styles.dashboardheadertext}>
                    Returning Today (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Returning Today' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setScrollElement('Return Completed')}>
                <View style={styles.dashboardheadertexthead}>
                  <Text style={styles.dashboardheadertext}>
                    Return Completed (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Return Completed' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderReturnComp(scrollelement)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ReturnRTO;

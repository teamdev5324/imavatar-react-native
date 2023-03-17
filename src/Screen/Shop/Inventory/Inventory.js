import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './inventorystyle';
import Active from '../../../Components/Active/Active';
import ActivationPending from '../../../Components/ActivationPending/ActivationPending';
import Inactive from '../../../Components/Inactive/Inactive';
import Onhold from '../../../Components/Onhold/Onhold';
import Blocked from '../../../Components/Blocked/Blocked';

const Inventory = () => {
  const [scrollelement, setScrollElement] = useState('Active');

  const renderInventoryComp = type => {
    if (type === 'Active') {
      return <Active />;
    }

    if (type === 'Activation pending') {
      return <ActivationPending />;
    }

    if (type === 'Inactive') {
      return <Inactive />;
    }

    if (type === 'On-hold') {
      return <Onhold />;
    }

    if (type === 'Blocked') {
      return <Blocked />;
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
              <TouchableOpacity onPress={() => setScrollElement('Active')}>
                <View
                  style={[styles.inventoryheadertexthead, {marginRight: 28}]}>
                  <Text
                    style={
                      scrollelement === 'Active'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Active (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Active' &&
                      styles.inventoryheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setScrollElement('Activation pending')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 28}]}>
                  <Text
                    style={
                      scrollelement === 'Activation pending'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Activation pending (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Activation pending' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setScrollElement('Inactive')}>
                <View
                  style={[styles.inventoryheadertexthead, {marginRight: 28}]}>
                  <Text
                    style={
                      scrollelement === 'Inactive'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Inactive (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Inactive' &&
                      styles.inventoryheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setScrollElement('On-hold')}>
                <View
                  style={[styles.inventoryheadertexthead, {marginRight: 28}]}>
                  <Text
                    style={
                      scrollelement === 'On-hold'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    On-hold (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'On-hold' &&
                      styles.inventoryheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setScrollElement('Blocked')}>
                <View style={styles.inventoryheadertexthead}>
                  <Text
                    style={
                      scrollelement === 'Blocked'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Blocked (0)
                  </Text>
                  <View
                    style={
                      scrollelement === 'Blocked' &&
                      styles.inventoryheadertextline
                    }></View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderInventoryComp(scrollelement)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Inventory;

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';

const CatalogUpload = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer}>
        <View style={styles.paymentheader}>
          <View style={styles.paymentlogohead}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../assets/Icons/leftarrow.png')} />
            </TouchableOpacity>

            <View style={styles.paymentlogo}>
              <Image source={require('../assets/Icons/logo-white.png')} />
              <Text style={styles.paymentlogotext}>imavatar</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Create Listing</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>In Progress Listing</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
          </View>
        </View>

        <View style={styles.catalogbottomhead}>
          <View style={styles.catalogsearchbox}>
            <TextInput
              style={[styles.catalogsearchinput, {height: 40}]}
              placeholder="Search by Product Category"
              // value={searchtext}
              // onChangeText={setSearchText}
            />
            <Image
              style={styles.searchIcon}
              source={require('../assets/Icons/searchicon.png')}
            />
          </View>

          <Text style={[styles.catalogbottomtext, {textAlign: 'center'}]}>
            No Listing Created
          </Text>

          <Text
            style={[
              {
                textAlign: 'center',
                fontSize: 12,
                marginVertical: 10,
                paddingHorizontal: 10,
              },
            ]}>
            Currently you do not have any active listing. Get started by
            creating your new listing.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            marginTop: 10,
            height: 34,
            width: '45%',
            backgroundColor: '#FF6658',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            navigation.navigate('AddSingleCatalog');
          }}>
          <Text style={{fontSize: 12, color: '#fff'}}>Add Single Catelog</Text>
          <Icon name="info" color={'#fff'} size={16} />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogUpload;

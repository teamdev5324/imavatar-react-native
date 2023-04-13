import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {Component} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import AppTextInput from '../Components/AppTextInput';
import AppDropDown from '../Components/DropDown';
import CatalogNavBar from './CatalogNavBar';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import moment from 'moment';
import {useEffect} from 'react';
import {groupBy} from 'lodash';
import {partnerBaseUrl} from '../apiService';

const SingleRow = ({label, value, index, navigation, item}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#ACACAC50',
          borderBottomWidth: 1,
          borderColor: '#484848',
          height: 45,
          width: '50%',
          borderRightWidth: 0,
          borderLeftWidth: 1,
          justifyContent: 'center',
          borderTopWidth: index === 0 ? 1 : 0,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#000',
            marginLeft: 10,
          }}>
          {label}
        </Text>
      </View>
      {index === 5 && value !== 'No' ? (
        <TouchableOpacity
          onPress={() => {
            if (
              item[0].qcstatus !== 'PENDING' &&
              item[0].qcstatus !== 'DRAFT' &&
              item[0].qcstatus !== 'PASS'
            ) {
              navigation.navigate('CorrectError', item);
            }
          }}
          style={{
            backgroundColor: '#ACACAC50',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: '#484848',
            height: 45,
            width: '50%',
            justifyContent: 'center',
            borderTopWidth: index === 0 ? 1 : 0,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: index === 5 ? 'red' : '#000',
              marginLeft: 10,
            }}>
            {value}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: '#ACACAC50',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: '#484848',
            height: 45,
            width: '50%',
            justifyContent: 'center',
            borderTopWidth: index === 0 ? 1 : 0,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: index === 5 ? 'red' : '#000',
              marginLeft: 10,
            }}>
            {value}
          </Text>
        </View>
      )}
    </View>
  );
};

const ViewQcStauts = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const cat = useSelector(state => state.userDetails.categoryDetail);
  const token = useSelector(state => state.userDetails.login_token);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${partnerBaseUrl}/partner/product/qc?uploadType=BULK`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios(config)
      .then(res => {
        let temp = res.data.results;
        console.log(temp, '111');
        temp = groupBy(temp, 'fileId');
        console.log(temp, '`222');
        temp = Object.values(temp);
        console.log(temp, '`3333');
        setAllData(temp);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(allData, 'allData');

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
              <Text style={styles.paymentheadertext}>Select Category</Text>
            </View>
            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Add Prodcut Info</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
          </View>
        </View>

        <View style={styles.catalogbottomhead}>
          <Text style={[styles.catalogbottomtext, {fontSize: 16}]}>
            <>{`${cat?.category} > ${cat?.subCategory}`}</>
          </Text>

          <CatalogNavBar ind={1} bulk navigation={navigation} />

          <View>
            <FlatList
              data={allData}
              contentContainerStyle={{marginTop: 20}}
              renderItem={({item, index}) => {
                return (
                  <View style={{marginBottom: 20}}>
                    <SingleRow
                      label={'File ID'}
                      value={item[0]?.fileId}
                      index={0}
                      navigation={navigation}
                      item={item}
                    />
                    <SingleRow
                      label={'File uploaded on'}
                      value={`${moment(item[0]?.createdDate).format(
                        'DD-MM-YYYY',
                      )}    |   ${moment(item[0]?.createdDate).format(
                        'hh:mm a',
                      )}`}
                      index={1}
                      navigation={navigation}
                      item={item}
                    />
                    <SingleRow
                      label={'File status'}
                      value={item[0]?.qcstatus}
                      index={2}
                      navigation={navigation}
                      item={item}
                    />
                    <SingleRow
                      label={'File processed on'}
                      value={`${moment(item[0].updatedDate).format(
                        'DD-MM-YYYY',
                      )} | ${moment(item[0].updatedDate).format('hh.mm a')}`}
                      index={3}
                      navigation={navigation}
                      item={item}
                    />
                    <SingleRow
                      label={'Number of products'}
                      value={allData[0].length}
                      index={4}
                      navigation={navigation}
                      item={item}
                    />
                    <SingleRow
                      label={'Errors'}
                      value={
                        item[0]?.qcstatus === 'PENDING' ||
                        item[0]?.qcstatus === 'DRAFT' ||
                        item[0]?.qcstatus === 'PASS'
                          ? 'No'
                          : 'Yes, correct error'
                      }
                      index={5}
                      item={item}
                      navigation={navigation}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ViewQcStauts;

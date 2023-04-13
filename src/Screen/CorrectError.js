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
  Alert,
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
import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import moment from 'moment';
import {useEffect} from 'react';
import {groupBy} from 'lodash';
import {editProductInfoAction} from '../reducers/UserReducer/user_actions';
import {partnerBaseUrl} from '../apiService';

const CorrectError = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  console.log(route, 'route');

  const cat = useSelector(state => state.userDetails.categoryDetail);
  const token = useSelector(state => state.userDetails.login_token);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (route?.params?.length > 0) {
      route?.params.forEach(item => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${partnerBaseUrl}/partner/product/qc/product/` + item?.id,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        };

        axios(config)
          .then(res => {
            console.log(res, 'res');
            setAllData(allData => [...allData, res.data.results]);
          })
          .catch(error => {
            Alert.alert('', 'Something went wrong');
          });
      });
    }
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
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/Cancel.png')}
              style={{marginRight: 10}}
            />
            <Text style={{width: '90%', fontSize: 12}}>
              There are some error in the listing.  To rectify please click on
              ‘Edit’ and correct the fields wherever necessary.
            </Text>
          </View>
          <View>
            <FlatList
              data={allData}
              contentContainerStyle={{marginTop: 20}}
              renderItem={({item, index}) => {
                console.log(item, 'item');
                return (
                  <View
                    style={{
                      marginBottom: 15,
                      backgroundColor: 'rgba(255, 102, 88, 0.57);',
                      height: 87,
                      borderRadius: 10,
                      padding: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#6D6D6D',
                          fontWeight: '400',
                        }}>
                        {`Product name : ${item.productInfo.productName}`}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CatalogAddProductInfo');
                          const info = {
                            item: item,
                            isEdit: true,
                          };
                          dispatch(editProductInfoAction(info));
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'red',
                            fontWeight: '400',
                          }}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        width: '90%',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#6D6D6D',
                          fontWeight: '400',
                        }}>
                        Product title:
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#6D6D6D',
                          fontWeight: '400',
                        }}>
                        {item.productInfo.productTitle}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        width: '90%',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#000',
                          fontWeight: '400',
                        }}>
                        Error
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#000',
                          fontWeight: '400',
                        }}>
                        {item.status !== 'DRAFT' &&
                        item.status !== 'ACTIVE' &&
                        item.status !== 'INACTIVE' &&
                        item.status !== 'PENDING'
                          ? 'Yes'
                          : 'No'}
                      </Text>
                    </View>
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

export default CorrectError;

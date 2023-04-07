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

const SingleRow = ({label, value, index, onPress}) => {
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
      <TouchableOpacity
        onPress={onPress}
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
    </View>
  );
};

const ViewSuccessfulListing = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const cat = useSelector(state => state.userDetails.categoryDetail);
  const token = useSelector(state => state.userDetails.login_token);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/partner/product/qc?uploadType=BULK&status=PASS',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios(config)
      .then(res => {
        res = res.data.results;
        res = groupBy(res, 'fileId');
        res = Object.values(res);
        console.log(res, 'res');
        setAllData(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(allData);

  const downloadFile = async (url, fileName) => {
    const {dirs} = RNFetchBlob.fs;
    const downloadDest = `${dirs.DownloadDir}/${fileName}`;

    const res = await RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: downloadDest,
        description: 'Downloading file...',
        title: fileName,
      },
    }).fetch('GET', url);

    return res.path();
  };

  const saveAs = async (uri, name) => {
    try {
      const filePath = await downloadFile(uri, name);
      console.log('Download successful! File saved to: ', filePath);
    } catch (error) {
      console.error('Download error: ', error);
    }
  };

  const download = fileId => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/files/download/' + fileId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios(config)
      .then(res => {
        res = res.data.results;
        saveAs(res.url, res.filename);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

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

          <CatalogNavBar ind={2} bulk navigation={navigation} />

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
                    />
                    <SingleRow
                      label={'File uploaded on'}
                      value={`${moment(item[0]?.createdDate).format(
                        'DD-MM-YYYY',
                      )}    |   ${moment(item[0]?.createdDate).format(
                        'hh:mm a',
                      )}`}
                      index={1}
                    />
                    <SingleRow
                      label={'File status'}
                      value={item[0]?.qcstatus}
                      index={2}
                    />
                    <SingleRow
                      label={'File processed on'}
                      value={item[0]?.createdBy}
                      index={3}
                    />
                    <SingleRow
                      label={'Number of products'}
                      value={item[0]?.createdBy}
                      index={4}
                      onPress={() => {
                        download(item[0]?.fileId);
                      }}
                    />
                    <SingleRow label={'Action'} value={'Download'} index={5} />
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

export default ViewSuccessfulListing;

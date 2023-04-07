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

const DownLoadComponent = ({onPress, title, color}) => {
  return (
    <View
      style={{
        height: 160,
        backgroundColor: color,
        marginVertical: 30,
        borderRadius: 15,
        padding: 15,
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
            fontWeight: '400',
            color: '#fff',
            width: '75%',
            lineHeight: 20,
          }}>
          Download excel template to add product details
        </Text>
        <Image
          source={require('../assets/Icons/Download.png')}
          style={{height: 50, width: 50}}
        />
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 42,
          backgroundColor: '#fff',
          marginTop: 35,
          alignSelf: 'center',
          width: Dimensions.get('window').width / 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const AddBulkProductInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const cat = useSelector(state => state.userDetails.categoryDetail);
  const token = useSelector(state => state.userDetails.login_token);

  const [download, setDownload] = useState(false);

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

  const [result, setResult] = useState();

  const convertinBase64 = async (path, name) => {
    const base64Data = await RNFetchBlob.fs.readFile(path, 'base64');
    // let base = base.split('base64,')[1];
    let data = {
      category: cat?.category,
      fileContent: base64Data,
      fileName: name,
      subcategory: cat.subCategory,
    };
    console.log(data, 'name');

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/partner/product/bulkUpload',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then(res => {
        console.log(res, 'res');
        if (res?.data?.status === 'SUCCESS') {
          setResult(res?.data?.results);
        }
        setDownload(true);
      })
      .catch(error => {
        console.log(error, 'errr');
        alert('something went wrong');
      });
  };

  console.log(result, 'result');

  const pickExcel = () => {
    try {
      DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      })
        .then(res => {
          console.log(res, 'res');
          convertinBase64(res.uri, res.name);
        })
        .catch(err => {
          alert('something went wrong');
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Please select a file');
      } else {
        alert('something went wrong');
      }
    }
  };

  const downLoadExcelFile = async () => {
    try {
      const url = 'https://imavatar-dev.s3.amazonaws.com/LDMS0007.xlsx';
      const fileName = 'myfile.xlsx';

      const filePath = await downloadFile(url, fileName);
      console.log('Download successful! File saved to: ', filePath);
    } catch (error) {
      console.error('Download error: ', error);
    }
  };

  const data = [
    {
      label: 'File ID',
      value: result?.documentId,
    },
    {
      label: 'File uploaded on',
      value: `${moment(result?.createdDate).format(
        'DD-MM-YYYY',
      )}    |   ${moment(result?.createdDate).format('hh:mm a')}`,
    },
    {
      label: 'File status',
      value: result?.status,
    },
    {
      label: 'File processed on',
      value: result?.createdBy,
    },
    {
      label: 'Number of products',
      value: result?.numberOfProducts,
    },
    {
      label: 'Errors',
      value: result?.status === 'FAILED' ? 'Yes' : 'No',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        height: Dimensions.get('window').height * 1,
        paddingBottom: 40,
      }}>
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
          <CatalogNavBar ind={0} bulk navigation={navigation} />
          {result?.status === 'FAILED' && (
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
          )}
          {!download ? (
            <View>
              <View>
                <DownLoadComponent
                  onPress={downLoadExcelFile}
                  title="Download"
                  color="#FF6658"
                />
              </View>
              <View>
                <DownLoadComponent
                  onPress={pickExcel}
                  title="Upload"
                  color="#FF665880"
                />
              </View>
            </View>
          ) : (
            <View>
              <FlatList
                data={data}
                contentContainerStyle={{marginTop: 20}}
                renderItem={({item, index}) => {
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
                          {item.label}
                        </Text>
                      </View>
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
                            color: '#000',
                            marginLeft: 10,
                          }}>
                          {item.value}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          )}
          {download && (
            <View style={{marginBottom: 40}}>
              <DownLoadComponent
                onPress={downLoadExcelFile}
                title="Download"
                color="#FF665880"
              />
            </View>
          )}
        </View>
        {!download && (
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              marginLeft: 20,
              width: '63%',
              color: 'gray',
            }}>
            Note: You can add maximum 30 number of products in single excel file
          </Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddBulkProductInfo;

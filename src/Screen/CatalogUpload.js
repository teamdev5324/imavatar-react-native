import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';

const CatalogUpload = props => {
  const navigation = useNavigation();
  const token = useSelector(state => state.userDetails.login_token);

  const [allData, setAllData] = useState([]);
  const [singleUpload, setSingleUplaod] = useState([]);
  const [bulkUpload, setBulkUpload] = useState([]);
  const [page, setPage] = useState(0);
  const [singlePage, setSinglePage] = useState(0);
  const [bulkPage, setBulkPage] = useState(0);
  const [singleUploadLength, setSingleUploadLength] = useState(0);
  const [bulkUploadLength, setBulkUploadLength] = useState(0);
  const [bundleKitLength, setBundleKitLength] = useState(0);

  const [uploadbtnclick, setUploadBtnClick] = useState('Single uploads');

  // useEffect(() => {
  //   if (allData.length > 0) {
  //     const single = allData.filter(item => item.uploadType === 'SINGLE');
  //     const bulk = allData.filter(item => item.uploadType === 'BULK');
  //     setSingleUplaod(single);
  //     setBulkUpload(bulk);
  //   }
  // }, [allData]);

  useEffect(() => {
    getAllCategory();
  }, [uploadbtnclick]);

  const getAllCategory = async () => {
    try {
      const headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };

      // http://18.234.206.45:8085/api/v1/partner/product/qc/paging?page=0&rows=5&sortBy=id&asc=false&uploadType=SINGLE
      const isSingle = uploadbtnclick.includes('Single');
      let uploadType = '';
      if (isSingle) {
        uploadType = 'SINGLE';
      } else {
        uploadType = 'BULK';
      }

      const pageNo = isSingle ? singlePage : bulkPage;

      const res = await axios.get(
        `http://18.234.206.45:8085/api/v1/partner/product/qc/paging?page=${pageNo}&rows=10&sortBy=id&asc=false&uploadType=${uploadType}`,
        {
          headers,
        },
      );
      console.log(
        '🚀 ~ file: CatalogUpload.js:58 ~ getAllCategory ~ res:',
        res,
      );
      if (res.data.status !== 'SUCCESS') {
        return alert("Can't fetch data");
      }

      setSingleUploadLength(res?.data?.results?.total_single_upload);
      setBulkUploadLength(res?.data?.results?.total_bulk_upload);
      setBundleKitLength(res?.data?.results?.total_buldle_kit);

      if (isSingle) {
        setSingleUplaod(prevVal => [...prevVal, ...res?.data?.results?.qc]);
        setSinglePage(singlePage + 1);
      } else {
        setBulkUpload(prevVal => [...prevVal, ...res?.data?.results?.qc]);
        setBulkPage(bulkPage + 1);
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
        error,
      );
    }
  };

  // useEffect(() => {
  //   getAllCategory(page);
  // }, []);

  return (
    <FlatList
      nestedScrollEnabled={true}
      ListHeaderComponent={() => (
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

            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Catalog uploads</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
          </View>

          <View style={styles.catalogbottomhead}>
            <Text style={styles.catalogbottomtext}>
              Create listing of products available on IMA portal
            </Text>

            <View style={styles.catalogsearchbox}>
              <TextInput
                style={[
                  styles.catalogsearchinput,
                  //   {fontSize: searchtext ? 14 : 12},
                ]}
                placeholder="Search by Gemstones, Rudraksha, Pooja Samagri, Deities"
                // value={searchtext}
                // onChangeText={setSearchText}
              />
              <Image
                style={styles.searchIcon}
                source={require('../assets/Icons/searchicon.png')}
              />
            </View>

            <Text style={styles.catalogbottomtext}>
              Sell products not listed on IMA portal
            </Text>

            <View style={styles.catalogboxhead}>
              <CatalogBox
                title="Add Single Catalog"
                onPress={() => {
                  navigation.navigate('CreateListing');
                }}
              />
              <CatalogBox
                title="Add Bulk Catalog"
                onPress={() => {
                  navigation.navigate('AddBulkCatalog');
                }}
              />
            </View>

            <Text style={styles.catalogbottomtext}>Create bundled listing</Text>

            <CatalogBox
              title="Create Bundled Kits"
              //   onPress={() => navigation.navigate('Bundled Kits')}
            />

            <Text style={[styles.catalogbottomtext, {marginTop: 15}]}>
              Overview
            </Text>

            <View style={styles.overviewboxhead}>
              <OverviewBox
                label="Total uploads done"
                number={singleUploadLength + bulkUploadLength + bundleKitLength}
              />

              <OverviewBox
                label={'Using Single uploads'}
                number={singleUploadLength}
              />

              <OverviewBox
                label={'Using Bulk uploads'}
                number={bulkUploadLength}
              />

              <OverviewBox
                label={'Using Bundled Kits'}
                number={bundleKitLength}
              />
            </View>

            <View style={styles.catalogbtnbox}>
              <TouchableOpacity
                onPress={() => setUploadBtnClick('Single uploads')}
                style={styles.catalogbtn}>
                <Text
                  style={{
                    color:
                      uploadbtnclick === 'Single uploads' ? '#FF6658' : '#000',
                    fontWeight:
                      uploadbtnclick === 'Single uploads' ? 'bold' : '400',
                    fontSize: 12,
                  }}>
                  Single uploads ( {singleUploadLength} )
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setUploadBtnClick('Bulk uploads')}
                style={[
                  styles.catalogbtn,
                  {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
                ]}>
                <Text
                  style={{
                    color:
                      uploadbtnclick === 'Bulk uploads' ? '#FF6658' : '#000',
                    fontWeight:
                      uploadbtnclick === 'Bulk uploads' ? 'bold' : '400',
                    fontSize: 12,
                  }}>
                  Bulk uploads ({bulkUploadLength})
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setUploadBtnClick('Bundled kits listing')}
                style={[
                  styles.catalogbtn,
                  {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
                ]}>
                <Text
                  style={{
                    color:
                      uploadbtnclick === 'Bundled kits listing'
                        ? '#FF6658'
                        : '#000',
                    fontWeight:
                      uploadbtnclick === 'Bundled kits listing'
                        ? 'bold'
                        : '400',
                    fontSize: 12,
                  }}>
                  Bundled kits{'\n'}listing ( {bundleKitLength} )
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
      contentContainerStyle={{
        backgroundColor: '#fff',
      }}
      data={uploadbtnclick === 'Single uploads' ? singleUpload : bulkUpload}
      renderItem={({item, index}) => {
        return <SingleUploads index={index} item={item} />;
      }}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (uploadbtnclick === 'Single uploads') {
          if (singleUpload.length < singleUploadLength) {
            getAllCategory();
          }
        } else {
          if (bulkUpload.length < bulkUploadLength) {
            getAllCategory();
          }
        }
      }}
      ListFooterComponent={() => {
        if (uploadbtnclick === 'Single uploads') {
          if (singleUpload.length < singleUploadLength) {
            return <ActivityIndicator size="large" color="#FF6658" />;
          }
        } else {
          if (bulkUpload.length < bulkUploadLength) {
            return <ActivityIndicator size="large" color="#FF6658" />;
          }
        }
        return null;
      }}
    />
  );
};

export default CatalogUpload;

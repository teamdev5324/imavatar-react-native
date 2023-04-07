import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
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
  const [singleUplaod, setSingleUplaod] = useState([]);
  const [bulkUpload, setBulkUpload] = useState([]);

  const [uploadbtnclick, setUploadBtnClick] = useState('Single uploads');

  console.log(allData, 'allData');

  useEffect(() => {
    if (allData.length > 0) {
      const single = allData.filter(item => item.uploadType === 'SINGLE');
      const bulk = allData.filter(item => item.uploadType === 'BULK');
      setSingleUplaod(single);
      setBulkUpload(bulk);
    }
  }, [allData]);

  console.log(singleUplaod, '111');
  console.log(bulkUpload, '222');

  const getAllCategory = async state => {
    console.log('hello');
    try {
      const headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };

      const res = await axios.get(
        `http://18.234.206.45:8085/api/v1/partner/product/qc`,
        {
          headers,
        },
      );
      setAllData(res?.data?.results);
      console.log(res, 'res');
    } catch (error) {
      console.log(
        '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
        error,
      );
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <ScrollView nestedScrollEnabled={true}>
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
            <OverviewBox label={'Total uploads done'} number={allData.length} />

            <OverviewBox
              label={'Using Single uploads'}
              number={singleUplaod.length}
            />

            <OverviewBox
              label={'Using Bulk uploads'}
              number={bulkUpload.length}
            />

            <OverviewBox label={'Using Bundled Kits'} number={'0'} />
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
                Single uploads ( {singleUplaod.length} )
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
                  color: uploadbtnclick === 'Bulk uploads' ? '#FF6658' : '#000',
                  fontWeight:
                    uploadbtnclick === 'Bulk uploads' ? 'bold' : '400',
                  fontSize: 12,
                }}>
                Bulk uploads ({bulkUpload.length})
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
                    uploadbtnclick === 'Bundled kits listing' ? 'bold' : '400',
                  fontSize: 12,
                }}>
                Bundled kits listing ( 1 )
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          nestedScrollEnabled={true}
          data={uploadbtnclick === 'Single uploads' ? singleUplaod : bulkUpload}
          renderItem={({item, index}) => {
            return <SingleUploads index={index} item={item} />;
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogUpload;

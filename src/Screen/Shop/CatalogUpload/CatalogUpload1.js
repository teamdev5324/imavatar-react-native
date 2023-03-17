import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './cataloguploadstyle';
import CatalogBox from '../../../Components/CatalogBox/CatalogBox';
import OverviewBox from '../../../Components/OverviewBox/OverviewBox';
import SingleUploads from '../../../Components/SingleUploads/SingleUploads';

const CatalogUpload = ({navigation}) => {
  const [searchtext, setSearchText] = useState('');

  const [uploadbtnclick, setUploadBtnClick] = useState('Single uploads');

  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer}>
        <View style={styles.paymentheader}>
          <View style={styles.paymentlogohead}>
            <Image source={require('../../assets/Icons/leftarrow.png')} />

            <View style={styles.paymentlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
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
                {fontSize: searchtext ? 14 : 12},
              ]}
              placeholder="Search by Gemstones, Rudraksha, Pooja Samagri, Deities"
              value={searchtext}
              onChangeText={setSearchText}
            />
            <Image
              style={styles.searchIcon}
              source={require('../../assets/Icons/searchicon.png')}
            />
          </View>

          <Text style={styles.catalogbottomtext}>
            Sell products not listed on IMA portal
          </Text>

          <View style={styles.catalogboxhead}>
            <CatalogBox title="Add Single Catalog" />
            <CatalogBox title="Add Bulk Catalog" />
          </View>

          <Text style={styles.catalogbottomtext}>Create bundled listing</Text>

          <CatalogBox
            title="Create Bundled Kits"
            onPress={() => navigation.navigate('Bundled Kits')}
          />

          <Text style={[styles.catalogbottomtext, {marginTop: 15}]}>
            Overview
          </Text>

          <View style={styles.overviewboxhead}>
            <OverviewBox />

            <OverviewBox />

            <OverviewBox />

            <OverviewBox />
          </View>

          <View style={styles.catalogbtnbox}>
            <TouchableOpacity
              onPress={() => setUploadBtnClick('Single uploads')}
              style={styles.catalogbtn}>
              <Text
                style={
                  uploadbtnclick === 'Single uploads'
                    ? styles.cbtntextclickcolor
                    : styles.cbtntextcolor
                }>
                Single uploads ( 1 )
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setUploadBtnClick('Bulk uploads')}
              style={[
                styles.catalogbtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  uploadbtnclick === 'Bulk uploads'
                    ? styles.cbtntextclickcolor
                    : styles.cbtntextcolor
                }>
                Bulk uploads ( 1 )
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setUploadBtnClick('Bundled kits listing')}
              style={[
                styles.catalogbtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  uploadbtnclick === 'Bundled kits listing'
                    ? styles.cbtntextclickcolor
                    : styles.cbtntextcolor
                }>
                Bundled kits listing ( 1 )
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <SingleUploads />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogUpload;

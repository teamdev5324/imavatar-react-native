import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './singlecatalogstyle';
import SelectDropdownBox from '../../../Components/SelectDropdown/SelectDropdownBox';

const SingleCatalog = ({navigation}) => {
  const catdata = [
    'Agarbatti',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  const subcatdata = [
    'Operations Manager',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  const [searchtext, setSearchText] = useState('');

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
            Catalog uploads &gt; Add single catalog
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

          <View style={styles.selectboxhead}>
            <SelectDropdownBox data={catdata} btntext="Select Category" />

            <SelectDropdownBox data={subcatdata} btntext="Sub Category" />
          </View>

          <View style={styles.singlecatbtnbox}>
            <Pressable
              style={styles.singlecatbtn}
              onPress={() => navigation.navigate('Add Product')}>
              <Text style={styles.singlecatbtntext}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleCatalog;

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';

import styles from '../../Screen/Shop/CatalogUpload/cataloguploadstyle';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import axios from 'axios';
import ImageBox from '../ImageBox/ImageBox';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';

const SelectCategory = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.userDetails.login_token);
  const cat = useSelector(state => state.userDetails.categoryDetail);

  const [allApiData, setAllApiData] = useState([]);

  const apiCall = async () => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/partner/product/qc',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    axios(config)
      .then(res => {
        console.log('success', res);
        setAllApiData(res.data?.results);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  console.log(allApiData, 'allApiData');

  useEffect(() => {
    apiCall();
  }, []);

  const data = [
    {
      title: 'Ganeshji ceramic idol 8 inch',
      image: require('../../assets/Images/ganesh.png'),
    },
    {
      title: 'Ganeshji ceramic idol 8 inch',
      image: require('../../assets/Images/ganeshtwo.png'),
    },
    {
      title: 'Ganeshji ceramic idol 8 inch',
      image: require('../../assets/Images/ganeshthree.png'),
    },
    {
      title: 'Ganeshji ceramic idol 8 inch',
      image: require('../../assets/Images/ganeshfour.png'),
    },
  ];

  const {handleChange, handleSubmit, values, errors, touched, handleBlur} =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        partnerSKUId: '',
        yourSellingPrice: '',
        onHandUnitCost: '',
        maximumRetailPrice: '',
        HSNCode: '',
      },
      onSubmit: values => {
        console.log(prepareData, 'prepareData');
      },
    });
  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer}>
        <View style={styles.paymentheader}>
          <View style={styles.paymentlogohead}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../../assets/Icons/leftarrow.png')} />
            </TouchableOpacity>

            <View style={styles.paymentlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.paymentlogotext}>imavatar</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Select Category</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('CatalogAddProductInfo')}
              style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Add Prodcut Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.catalogbottomhead}>
          <Text style={[styles.catalogbottomtext, {fontSize: 16}]}>
            {`${cat.category} > ${cat.subCategory}`}
          </Text>
        </View>
        <View>
          <FlatList
            data={allApiData}
            contentContainerStyle={{marginHorizontal: 15}}
            renderItem={({item}) => {
              return (
                <ImageBox
                  item={item}
                  image={item?.image}
                  title={item?.title}
                  navigation={navigation}
                />
              );
            }}
          />
          <View style={styles.singlecatbtnbox}>
            <Pressable style={styles.singlecatbtn} onPress={() => {}}>
              <Text style={styles.singlecatbtntext}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SelectCategory;

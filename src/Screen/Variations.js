import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import AppDropDown from '../Components/DropDown';
import CatalogNavBar from './CatalogNavBar';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ReactNativeModal from 'react-native-modal';
import zIndex from '@material-ui/core/styles/zIndex';
import axios from 'axios';
import productInfoData from './ApiData';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AppTextInput from '../Components/AppTextInput';

const VariationsInfo = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const token = useSelector(state => state.userDetails.login_token);
  const cat = useSelector(state => state.userDetails.categoryDetail);
  const productInformation = useSelector(
    state => state.userDetails.productInformation,
  );
  const editProductInfo = useSelector(
    state => state.userDetails.editProductInfo,
  );

  const [preFillValue, setPreFillValue] = useState({});

  const getProductInfoById = async () => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url:
        'http://18.234.206.45:8085/api/v1/partner/product/qc/product/' +
        editProductInfo?.item?.id,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    await axios(config)
      .then(res => {
        console.log(res, 'res');
        setPreFillValue(res?.data?.results?.productVariation);
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  useEffect(() => {
    if (editProductInfo.isEdit) {
      getProductInfoById();
    }
  }, [editProductInfo]);

  const productVistalInfo = Yup.object().shape({
    size: Yup.string(),
    materialType: Yup.string(),
    color: Yup.string(),
    shape: Yup.string(),
    length: Yup.string(),
    width: Yup.string(),
    height: Yup.string(),
    unitQuantity: Yup.string(),
  });

  const {handleChange, handleSubmit, values, errors} = useFormik({
    enableReinitialize: true,
    initialValues: {
      size: editProductInfo.isEdit ? preFillValue.size : '',
      materialType: editProductInfo.isEdit ? preFillValue.materialType : '',
      color: editProductInfo.isEdit ? preFillValue.color : '',
      shape: editProductInfo.isEdit ? preFillValue.shape : '',
      length: editProductInfo.isEdit ? preFillValue.lengthOfProduct : '',
      width: editProductInfo.isEdit ? preFillValue.widthOfProduct : '',
      height: editProductInfo.isEdit ? preFillValue.heightOfProduct : '',
      unitQuantity: editProductInfo.isEdit ? preFillValue.unitQuantity : '',
    },
    validationSchema: productVistalInfo,
    onSubmit: values => {
      console.log(values, 'values');

      const prepareData = {
        category: cat.category,
        subCategory: cat.subCategory,
        pid: productInformation.id,
        variation: {
          color: values.color,
          height: values.height,
          length: values.length,
          materialType: values.materialType,
          shape: values.shape,
          size: values.size,
          unitQuantity: values.unitQuantity,
          width: values.width,
        },
      };

      console.log(prepareData, 'prepareData');

      let config = {
        method: 'post',
        url: 'http://18.234.206.45:8085/api/v1/partner/product/singleUpload/save',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data: prepareData,
      };
      axios(config)
        .then(Response => {
          console.log('Response', Response);
          setShowModal(true);
        })
        .catch(err => {
          console.log('Error', err);
          alert('something went wrong');
        });
    },
  });
  return (
    <ScrollView>
      <ReactNativeModal
        isVisible={showModal}
        onBackPress={() => {
          navigation.navigate('Dashboard');
          setShowModal(false);
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'relative',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
              setShowModal(false);
            }}
            style={{position: 'absolute', zIndex: 99, right: 10, top: 10}}>
            <Text style={{color: '#000', fontSize: 13}}>Close</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              paddingHorizontal: 20,
              paddingVertical: 40,
            }}>
            Your Listing has been successfully submitted. The listing will be
            displayed once QC is approved by Admin
          </Text>
        </View>
      </ReactNativeModal>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectCategory')}
              style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Select Category</Text>
            </TouchableOpacity>
            <View style={styles.paymentheadertexthead}>
              <Text style={styles.paymentheadertext}>Add Prodcut Info</Text>
              <View style={styles.paymentheadertextline}></View>
            </View>
          </View>
        </View>

        <View style={styles.catalogbottomhead}>
          <Text style={[styles.catalogbottomtext, {fontSize: 16}]}>
            {`${cat.category} > ${cat.subCategory}`}
          </Text>

          <CatalogNavBar ind={4} navigation={navigation} />

          <View style={{marginTop: 15}}>
            <AppTextInput
              label={'Size'}
              icon
              error={errors.size}
              value={values.size}
              onChangeText={handleChange('size')}
            />
            <View style={{position: 'relative'}}>
              <AppTextInput
                label={'Material Type'}
                icon
                error={errors.materialType}
                value={values.materialType}
                onChangeText={handleChange('materialType')}
              />
              <View style={{position: 'absolute', right: 0, top: 2}}>
                <Text style={{color: 'red', fontSize: 12}}>
                  Show Price break-up
                </Text>
              </View>
            </View>
            <AppTextInput
              label={'Colour'}
              icon
              error={errors.color}
              value={values.color}
              onChangeText={handleChange('color')}
            />
            <AppTextInput
              label={'Shape'}
              icon
              error={errors.shape}
              value={values.shape}
              onChangeText={handleChange('shape')}
            />
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <AppTextInput
                label={'Length'}
                textInputStyle={{
                  width: Dimensions.get('window').width / 3 - 30,
                }}
                error={errors.length}
                value={values.length}
                onChangeText={handleChange('length')}
              />
              <AppTextInput
                label={'Width'}
                textInputStyle={{
                  width: Dimensions.get('window').width / 3 - 30,
                }}
                error={errors.width}
                value={values.width}
                onChangeText={handleChange('width')}
              />
              <AppTextInput
                label={'Height'}
                textInputStyle={{
                  width: Dimensions.get('window').width / 3 - 30,
                }}
                error={errors.height}
                value={values.height}
                onChangeText={handleChange('height')}
              />
            </View>
            <AppTextInput
              label={'Unit Quantity'}
              icon
              error={errors.unitQuantity}
              value={values.unitQuantity}
              onChangeText={handleChange('unitQuantity')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 15,
              }}>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: '42%',
                  backgroundColor: '#FF6658',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleSubmit}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
                  Save & Finish
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: '42%',
                  backgroundColor: '#FF6658',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
                  Save & Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default VariationsInfo;

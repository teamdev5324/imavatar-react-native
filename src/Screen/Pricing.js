import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import AppTextInput from '../Components/AppTextInput';
import AppDropDown from '../Components/DropDown';
import CatalogNavBar from './CatalogNavBar';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import productInfoData from './ApiData';
import ReactNativeModal from 'react-native-modal';
import {editProductInfoAction} from '../reducers/UserReducer/user_actions';

const renderITem = (name, value) => {
  return (
    <View
      style={{
        borderWidth: 1.5,
        width: '85%',
        height: 35,
        borderTopWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRightWidth: 1,
          width: '55%',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 10,
          }}>
          {name}
        </Text>
      </View>
      <View
        style={{
          width: '45%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: '500',
            marginRight: 10,
          }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const PricingInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
        setPreFillValue(res?.data?.results?.productPricing);
      })
      .catch(err => {});
  };

  useEffect(() => {
    if (editProductInfo.isEdit) {
      getProductInfoById();
    }
  }, [editProductInfo]);

  const productVistalInfo = Yup.object().shape({
    partnerSKUId: Yup.string()
      .required('Partner sku id is required')
      .matches(/^[A-Za-z0-9\s]+$/, 'Enter valid product sku id'),
    yourSellingPrice: Yup.string()
      .required('Selling price is required')
      .matches(/^\d{0,8}(\.\d{1,4})?$/, 'Enter valid selling price'),
    onHandUnitCost: Yup.string()
      .required('On hand unit cost is required')
      .matches(/^\d{0,8}(\.\d{1,4})?$/, 'Enter valid unit cost'),
    maximumRetailPrice: Yup.string()
      .required('Maximum retial price is required')
      .matches(/^\d{0,8}(\.\d{1,4})?$/, 'Enter valid MRP'),
    HSNCode: Yup.string()
      .required('HSN code is required')
      .matches(/^[0-9\b]+$/, 'Enter valid HSN code'),
  });

  const {handleChange, handleSubmit, values, errors, touched, handleBlur} =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        partnerSKUId: editProductInfo.isEdit ? preFillValue.partnerSkuId : '',
        yourSellingPrice: editProductInfo.isEdit
          ? preFillValue.yourSellingprice
          : '',
        onHandUnitCost: editProductInfo.isEdit
          ? preFillValue.onHandUnitCost
          : '',
        maximumRetailPrice: editProductInfo.isEdit ? preFillValue.mrpPrice : '',
        HSNCode: editProductInfo.isEdit ? preFillValue.hsnCode : '',
      },
      validationSchema: productVistalInfo,
      onSubmit: values => {
        const prepareData = {
          category: editProductInfo.isEdit
            ? editProductInfo?.item?.category
            : cat.category,
          subCategory: editProductInfo.isEdit
            ? editProductInfo?.item?.subCategory
            : cat.subCategory,
          pid: editProductInfo.isEdit
            ? preFillValue?.id
            : productInformation.id,
          pricing: {
            hsncode: values.HSNCode,
            mrp: values.maximumRetailPrice,
            onHandUnitCost: values.onHandUnitCost,
            partnerSKUId: values.partnerSKUId,
            yourSellingPrice: values.yourSellingPrice,
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
            navigation.navigate('DescriptionInfo');
          })
          .catch(err => {
            Alert.alert('', 'Something went wrong');
          });
      },
    });
  return (
    <ScrollView>
      <ReactNativeModal
        isVisible={showModal}
        onBackPress={() => {
          setShowModal(false);
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: Dimensions.get('window').height * 0.45,
            width: Dimensions.get('window').width * 0.85,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{position: 'absolute', top: 10, right: 20}}>
            <Text style={{color: '#000', fontSize: 14}}>Close</Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1.5,
              width: '85%',
              height: 35,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '700',
                marginRight: 10,
              }}>
              Amount in Rs.
            </Text>
          </View>
          {renderITem('Your Selling Price', '5000')}
          {renderITem('Commission Fee', '500')}
          {renderITem('Convenience Fee', '100')}
          {renderITem('Shipping Fee', '100')}
          {renderITem('GST', '1026')}
          {renderITem('Total listing price', '6726')}
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
            {editProductInfo.isEdit ? (
              <>{`${editProductInfo?.item?.category} > ${editProductInfo?.item?.subCategory}`}</>
            ) : (
              <>{`${cat?.category} > ${cat?.subCategory}`}</>
            )}
          </Text>
          <CatalogNavBar ind={1} navigation={navigation} />
          <View style={{marginTop: 15}}>
            <AppTextInput
              label={'Partner SKU ID'}
              icon
              error={touched.partnerSKUId ? errors.partnerSKUId : ''}
              value={values.partnerSKUId}
              onChangeText={handleChange('partnerSKUId')}
              onBlur={handleBlur('partnerSKUId')}
            />
            <AppTextInput
              label={'Your Selling price'}
              icon
              require
              error={touched.yourSellingPrice ? errors.yourSellingPrice : ''}
              value={values.yourSellingPrice}
              onChangeText={handleChange('yourSellingPrice')}
              onBlur={handleBlur('yourSellingPrice')}
            />
            <AppTextInput
              label={'On hand unit cost'}
              icon
              require
              error={touched.onHandUnitCost ? errors.onHandUnitCost : ''}
              value={values.onHandUnitCost}
              onChangeText={handleChange('onHandUnitCost')}
              onBlur={handleBlur('onHandUnitCost')}
            />
            <AppTextInput
              label={'Maximum Retail price'}
              icon
              require
              error={
                touched.maximumRetailPrice ? errors.maximumRetailPrice : ''
              }
              value={values.maximumRetailPrice}
              onChangeText={handleChange('maximumRetailPrice')}
              onBlur={handleBlur('maximumRetailPrice')}
            />
            <AppTextInput
              label={'HSN Code'}
              icon
              error={touched.HSNCode ? errors.HSNCode : ''}
              value={values.HSNCode}
              onChangeText={handleChange('HSNCode')}
              onBlur={handleBlur('HSNCode')}
              q
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
                  Save & Next
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
            <View>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: '42%',
                  backgroundColor: '#FF6658',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 22,
                }}
                onPress={() => {
                  navigation.navigate('Dashboard');
                  dispatch(editProductInfoAction({}));
                }}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PricingInfo;

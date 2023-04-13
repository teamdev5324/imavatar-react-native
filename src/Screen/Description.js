import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import AppTextInput from '../Components/AppTextInput';
import AppDropDown from '../Components/DropDown';
import CatalogNavBar from './CatalogNavBar';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import productInfoData from './ApiData';
import {useDispatch, useSelector} from 'react-redux';
import {editProductInfoAction} from '../reducers/UserReducer/user_actions';
import {partnerBaseUrl} from '../apiService';

const DescriptionInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        `${partnerBaseUrl}/partner/product/qc/product/` +
        editProductInfo?.item?.id,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    await axios(config)
      .then(res => {
        console.log(res, 'res');
        setPreFillValue(res?.data?.results?.productDescription);
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
    briefDescription: Yup.string()
      .required('Description is required')
      .matches(/^[A-Za-z0-9\s]+$/, 'Enter valid Description'),
    highlights: Yup.string()
      .required('Highlights are required')
      .matches(/^[A-Za-z0-9\s]+$/, 'Enter valid hightlights'),
    keywords: Yup.string().required('Keywords are required'),
    relatedFaiths: Yup.string()
      .required('Related faiths are required')
      .matches(/^[A-Za-z\s]+$/, 'Enter valid related faiths'),
    relatedFestival: Yup.string()
      .required('Related festivals are required')
      .matches(/^[A-Za-z\s]+$/, 'Enter valid related festivals'),
    relatedDeities: Yup.string()
      .required('Related deities are required')
      .matches(/^[A-Za-z\s]+$/, 'Enter valid related deities'),
    otherInformation: Yup.string()
      .required('Other information is required')
      .matches(/^[A-Za-z0-9\s]+$/, 'Enter valid other information'),
    formOfProduct: Yup.string().required('Form of product is required'),
    expirable: Yup.string().required('Expirability is required'),
    shelfLife: Yup.string().required('Shelf life is required'),
    fragile: Yup.string().required('Fragile is required'),
    returnAvailable: Yup.string().required('Return availability is required'),
    exchangeAvailable: Yup.string().required(
      'Exchange availability is required',
    ),
    unitMeasurement: Yup.string().required('Unit of measurement is required'),
    width: Yup.string()
      .required('Width is required')
      .matches(/^[+-]?((\d+\.?\d*)|(\.\d+))$/, 'Enter valid width'),
    height: Yup.string()
      .required('Height is required')
      .matches(/^[+-]?((\d+\.?\d*)|(\.\d+))$/, 'Enter valid Height'),
    depth: Yup.string()
      .required('Depth is required')
      .matches(/^[+-]?((\d+\.?\d*)|(\.\d+))$/, 'Enter valid Depth'),
  });

  //  briefDescription: values.briefDescription,
  //         formOfProduct: values.formOfProduct,
  //         fragile: values.fragile,
  //         highLights: values.highlights,
  //         keyWords: values.keywords,
  //         otherInformation: values.otherInformation,
  //         packagingHeight: values.height,
  //         packagingLength: values.depth,
  //         packagingWidth: values.width,
  //         perisableExpirable: values.expirable,
  //         relatedDeities: values.relatedDeities,
  //         relatedFaith: values.relatedFaiths,
  //         relatedFestival: values.relatedFestival,
  //         replacementAvailable: values.exchangeAvailable,
  //         returnAvailable: values.returnAvailable,
  //         shelfLife: values.shelfLife,
  //         unitOfPackaging: values.unitMeasurement,

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    handleBlur,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      briefDescription: editProductInfo.isEdit
        ? preFillValue.briefDescription
        : '',
      highlights: editProductInfo.isEdit ? preFillValue.highlights : '',
      keywords: editProductInfo.isEdit ? preFillValue.keywords : '',
      relatedFaiths: editProductInfo.isEdit ? preFillValue.relatedFaiths : '',
      relatedFestival: editProductInfo.isEdit
        ? preFillValue.relatedFestival
        : '',
      relatedDeities: editProductInfo.isEdit ? preFillValue.relatedDeities : '',
      otherInformation: editProductInfo.isEdit
        ? preFillValue.otherInformation
        : '',
      formOfProduct: editProductInfo.isEdit ? preFillValue.formOfProduct : '',
      expirable: editProductInfo.isEdit
        ? preFillValue.perishableOrExpirable
        : '',
      shelfLife: editProductInfo.isEdit ? preFillValue.shelfLife : '',
      fragile: editProductInfo.isEdit ? preFillValue.fragile : '',
      returnAvailable: editProductInfo.isEdit
        ? preFillValue.returnAvailable
        : '',
      exchangeAvailable: editProductInfo.isEdit
        ? preFillValue.replacementAvailable
        : '',
      width: editProductInfo.isEdit ? preFillValue.packagingWeight : '',
      height: editProductInfo.isEdit ? preFillValue.packagingHeight : '',
      depth: editProductInfo.isEdit ? preFillValue.packagingLength : '',
      unitMeasurement: editProductInfo.isEdit
        ? preFillValue.packagingDimensionUnit
        : '',
    },
    validationSchema: productVistalInfo,
    onSubmit: values => {
      console.log(values, 'values');
      const prepareData = {
        category: editProductInfo.isEdit
          ? editProductInfo?.item?.category
          : cat.category,
        subCategory: editProductInfo.isEdit
          ? editProductInfo?.item?.subCategory
          : cat.subCategory,
        pid: editProductInfo.isEdit ? preFillValue?.id : productInformation.id,
        description: {
          briefDescription: values.briefDescription,
          formOfProduct: values.formOfProduct,
          fragile: values.fragile,
          highLights: values.highlights,
          keyWords: values.keywords,
          otherInformation: values.otherInformation,
          packagingHeight: values.height,
          packagingLength: values.depth,
          packagingWidth: values.width,
          perisableExpirable: values.expirable,
          relatedDeities: values.relatedDeities,
          relatedFaith: values.relatedFaiths,
          relatedFestival: values.relatedFestival,
          replacementAvailable: values.exchangeAvailable,
          returnAvailable: values.returnAvailable,
          shelfLife: values.shelfLife,
          unitOfPackaging: values.unitMeasurement,
        },
      };

      console.log(prepareData, 'prepareData');

      let config = {
        method: 'post',
        url: `${partnerBaseUrl}/partner/product/singleUpload/save`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data: prepareData,
      };
      axios(config)
        .then(Response => {
          console.log('Response', Response);
          navigation.navigate('CatalogImages');
        })
        .catch(err => {
          console.log('Error', err);
        });
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
            {editProductInfo?.isEdit ? (
              <>{`${editProductInfo?.item?.category} > ${editProductInfo?.item?.subCategory}`}</>
            ) : (
              <>{`${cat?.category} > ${cat?.subCategory}`}</>
            )}
          </Text>

          <CatalogNavBar ind={2} navigation={navigation} />

          <View style={{marginTop: 15}}>
            <AppTextInput
              label={'Brief Desccription'}
              icon
              require
              error={touched.briefDescription ? errors.briefDescription : ''}
              value={values.briefDescription}
              onChangeText={handleChange('briefDescription')}
              onBlur={handleBlur('briefDescription')}
            />
            <AppTextInput
              label={'Highlights'}
              icon
              require
              error={touched.highlights ? errors.highlights : ''}
              value={values.highlights}
              onChangeText={handleChange('highlights')}
              onBlur={handleBlur('highlights')}
            />
            <AppTextInput
              label={'Keywords'}
              icon
              require
              error={touched.keywords ? errors.keywords : ''}
              value={values.keywords}
              onChangeText={handleChange('keywords')}
              onBlur={handleBlur('keywords')}
            />
            <AppTextInput
              label={'Related faiths'}
              icon
              require
              error={touched.relatedFaiths ? errors.relatedFaiths : ''}
              value={values.relatedFaiths}
              onChangeText={handleChange('relatedFaiths')}
              onBlur={handleBlur('relatedFaiths')}
            />
            <AppTextInput
              label={'Related Festival'}
              icon
              require
              error={touched.relatedFestival ? errors.relatedFestival : ''}
              value={values.relatedFestival}
              onChangeText={handleChange('relatedFestival')}
              onBlur={handleBlur('relatedFestival')}
            />
            <AppTextInput
              label={'Related Deities'}
              icon
              require
              error={touched.relatedDeities ? errors.relatedDeities : ''}
              value={values.relatedDeities}
              onChangeText={handleChange('relatedDeities')}
              onBlur={handleBlur('relatedDeities')}
            />
            <AppTextInput
              label={'Other Information'}
              icon
              require
              error={touched.otherInformation ? errors.otherInformation : ''}
              value={values.otherInformation}
              onChangeText={handleChange('otherInformation')}
              onBlur={handleBlur('otherInformation')}
            />
            <AppDropDown
              data={['Solid', 'Liquid']}
              error={touched.formOfProduct ? errors.formOfProduct : ''}
              onChange={item => {
                setFieldValue('formOfProduct', item);
              }}
              label={'Form of product'}
              onBlur={() => setFieldTouched('formOfProduct', true)}
              value={values.formOfProduct}
              defaultValue={values.formOfProduct}
            />
            <AppDropDown
              data={['Yes', 'No']}
              error={touched.expirable ? errors.expirable : ''}
              onChange={item => {
                setFieldValue('expirable', item);
              }}
              label={'Perishable/Expirable'}
              onBlur={() => setFieldTouched('expirable', true)}
              value={values.expirable}
              defaultValue={values.expirable}
            />
            <AppTextInput
              label={'Shelf Life'}
              icon
              require
              error={touched.shelfLife ? errors.shelfLife : ''}
              value={values.shelfLife}
              onChangeText={handleChange('shelfLife')}
              onBlur={handleBlur('shelfLife')}
            />
            <AppDropDown
              data={['Yes', 'No']}
              error={touched.fragile ? errors.fragile : ''}
              onChange={item => {
                setFieldValue('fragile', item);
              }}
              label={'Fragile'}
              onBlur={() => setFieldTouched('fragile', true)}
              value={values.fragile}
              defaultValue={values.fragile}
            />
            <AppDropDown
              data={['Yes', 'No']}
              error={touched.returnAvailable ? errors.returnAvailable : ''}
              onChange={item => {
                setFieldValue('returnAvailable', item);
              }}
              label={'Return Available'}
              onBlur={() => setFieldTouched('returnAvailable', true)}
              value={values.returnAvailable}
              defaultValue={values.returnAvailable}
            />
            <AppDropDown
              data={['Yes', 'No']}
              error={touched.exchangeAvailable ? errors.exchangeAvailable : ''}
              onChange={item => {
                setFieldValue('exchangeAvailable', item);
              }}
              label={'Exchange Available'}
              onBlur={() => setFieldTouched('exchangeAvailable', true)}
              value={values.exchangeAvailable}
              defaultValue={values.exchangeAvailable}
            />

            <AppDropDown
              data={['mm', 'cm', 'm', 'ft', 'in']}
              error={touched.unitMeasurement ? errors.unitMeasurement : ''}
              onChange={item => {
                setFieldValue('unitMeasurement', item);
              }}
              label={'Unit of Measurement (UOM)'}
              onBlur={() => setFieldTouched('unitMeasurement', true)}
              value={values.unitMeasurement}
              defaultValue={values.unitMeasurement}
            />
            <View style={{marginBottom: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Icon name="close" style={{marginRight: 6}} /> */}
                <Image
                  source={require('../assets/HelpinputIcon.png')}
                  style={{marginRight: 5}}
                />
                <Text
                  style={{
                    marginRight: 4,
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000',
                  }}>
                  Packaging dimensions
                </Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <AppTextInput
                  label={'Width'}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                  error={touched.width ? errors.width : ''}
                  value={values.width}
                  onChangeText={handleChange('width')}
                  onBlur={handleBlur('width')}
                />
                <AppTextInput
                  label={'Length/Height'}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                  error={touched.height ? errors.height : ''}
                  value={values.height}
                  onChangeText={handleChange('height')}
                  onBlur={handleBlur('height')}
                />
                <AppTextInput
                  label={'Depth'}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                  error={touched.depth ? errors.depth : ''}
                  value={values.depth}
                  onChangeText={handleChange('depth')}
                  onBlur={handleBlur('depth')}
                />
              </View>
            </View>
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

export default DescriptionInfo;

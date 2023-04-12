import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';

import styles from '../Screen/Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import AppTextInput from '../Components/AppTextInput';
import AppDropDown from '../Components/DropDown';
import CatalogNavBar from './CatalogNavBar';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import productInfoData from './ApiData';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {useState} from 'react';
import {
  editProductInfoAction,
  productInformation,
} from '../reducers/UserReducer/user_actions';
import {useEffect} from 'react';

const CatalogAddProductInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cat = useSelector(state => state.userDetails.categoryDetail);
  const token = useSelector(state => state.userDetails.login_token);
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
        setPreFillValue(res?.data?.results?.productInfo);
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

  // const productInformation = useSelector(
  //   state => state.userDetails.productInformation,
  // );

  // console.log(productInformation, 'productInformation');

  const [documentId, setDocumentId] = useState(
    editProductInfo.isEdit ? preFillValue?.cirtificate : '',
  );
  const [isTrue, setisTrue] = useState(false);

  const convertinBase64 = async (path, name) => {
    try {
      const base64Data = await RNFetchBlob.fs.readFile(path, 'base64');
      let data = {
        fileName: name,
        usecaseName: 'certificateUpload',
        fileContent: base64Data,
      };

      let config_ = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://18.234.206.45:8085/api/v1/files/upload',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        data,
      };
      console.log('config', config_);

      const fileRes = await axios(config_);
      console.log('fileRes', fileRes);

      const docId = fileRes.data.results.documentId;
      if (docId !== '') {
        setisTrue(false);
      }

      setDocumentId(docId);
    } catch (error) {
      alert('Unable to upload the document');
      console.log(
        '🚀 ~ file: AddProductInfo.js:92 ~ convertinBase64 ~ error:',
        error,
      );
    }
  };

  const pickAPDF = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'App Media Library Permission',
          message:
            'App needs access to your media library ' +
            'so you can pick photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const results = await DocumentPicker.pickSingle({
          type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
          copyTo: 'cachesDirectory',
        });
        console.log('response', results);
        const fileLocation =
          results.type === DocumentPicker.types.pdf
            ? results.uri
            : results.fileCopyUri;

        const fileName =
          results.type === DocumentPicker.types.pdf
            ? results.name + '.pdf'
            : results.name;

        convertinBase64(fileLocation, fileName);
      } else {
        alert('Media Library Permission Denied');
      }
    } catch (err) {
      console.log('🚀 ~ file: AddProductInfo.js:133 ~ pickAPDF ~ err:', err);
      if (DocumentPicker.isCancel(err)) {
        alert('Please select a file');
      } else {
        alert('something went wrong');
      }
    }
  };

  const productVistalInfo = Yup.object().shape({
    productName: Yup.string()
      .required('Product name is required')
      .matches(/^[a-zA-Z ]*$/, 'Enter valid product name'),
    productTitle: Yup.string()
      .required('Product title is required')
      .matches(/^[a-zA-Z ]*$/, 'Enter valid product title'),
    // productID: Yup.string()
    //   .required('Product id is required')
    //   .matches(/^\d+(\.\d+)*$/, 'Enter Valid Product Id'),
    brandName: Yup.string()
      .required('Brand name is required')
      .matches(/^[a-zA-Z ]*$/, 'Enter valid product id'),
    productType: Yup.string()
      .required('Product type is required')
      .matches(/^[a-zA-Z ]*$/, 'Enter valid product type'),
    stockStatus: Yup.string().required('Stock status is required'),
    weightOfProduct: Yup.string()
      .required('Weight of product is required')
      .matches(/^[0-9\b]+$/, 'Enter valid weight of product'),
    // dimensionsOfProduct: Yup.string().required(
    //   'Dimensions of product is required',
    // ),
    CountryOfOrigin: Yup.string().required('Country of origin is required'),
    includedItems: Yup.string()
      .required('Included items is required')
      .matches(/^[a-zA-Z ]*$/, 'Enter valid included items'),
    onHandQuantity: Yup.string()
      .required('Quantity is required')
      .matches(/^[0-9\b]+$/, 'Enter valid quantity'),
    restockLevel: Yup.string()
      .required('Restock level is required')
      .matches(/^[0-9\b]+$/, 'Enter valid restock level'),
    TaxClass: Yup.string().required('Tax class is required'),
    Colour: Yup.string().required('Colour is required'),
    shape: Yup.string().required('Shape is required'),
    materialType: Yup.string().required('Material type is required'),
    unitOfMeasurement: Yup.string().required(
      'Unit of measurement one is required',
    ),
    unitOfMeasurementTwo: Yup.string().required(
      'Unit of measurement two is required',
    ),
    width: Yup.string()
      .required('Width is required')
      .matches(/^\d+(\.\d+)*$/, 'Enter Valid Width'),
    height: Yup.string()
      .required('Height is required')
      .matches(/^\d+(\.\d+)*$/, 'Enter Valid Height '),
    depth: Yup.string()
      .required('Depth is required')
      .matches(/^\d+(\.\d+)*$/, 'Enter Valid   Depth '),
    productTypeId: Yup.string().required('Product Type Id is required'),
  });

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldValue,
    handleBlur,
    setFieldTouched,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      // productName: 'demo',
      // productTitle: 'this',
      // productID: '2',
      // brandName: 'hella',
      // productType: 'Simple',
      // stockStatus: 'Available',
      // weightOfProduct: '1.99',
      // dimensionsOfProduct: 'cm',
      // CountryOfOrigin: 'india',
      // includedItems: 'tometo',
      // onHandQuantity: '20',
      // restockLevel: '30',
      // TaxClass: 'Taxable',
      // Colour: 'red',
      // shape: 'Circle',
      // materialType: 'loha',
      // unitOfMeasurement: 'gm',
      // unitOfMeasurementTwo: '301',
      // width: '20',
      // height: '30',
      // depth: '40',
      // productTypeId: 'GSTIN',
      productName: editProductInfo.isEdit ? preFillValue.productName : '',
      productTitle: editProductInfo.isEdit ? preFillValue.productTitle : '',
      productID: editProductInfo.isEdit ? preFillValue.productId : '',
      brandName: editProductInfo.isEdit ? preFillValue.brandName : '',
      productType: editProductInfo.isEdit ? preFillValue.productType : '',
      stockStatus: editProductInfo.isEdit ? preFillValue.stockStatus : '',
      weightOfProduct: editProductInfo.isEdit
        ? preFillValue.weightOfProduct
        : '',
      // dimensionsOfProduct: editProductInfo.isEdit
      //   ? preFillValue.unitOfDimension
      //   : '',
      CountryOfOrigin: editProductInfo.isEdit
        ? preFillValue.countryOfOrigin
        : '',
      includedItems: editProductInfo.isEdit ? preFillValue.includedItem : '',
      onHandQuantity: editProductInfo.isEdit ? preFillValue.onHandQuantity : '',
      restockLevel: editProductInfo.isEdit ? preFillValue.restockLevel : '',
      TaxClass: editProductInfo.isEdit ? preFillValue.taxClass : '',
      Colour: editProductInfo.isEdit ? preFillValue.color : '',
      shape: editProductInfo.isEdit ? preFillValue.shape : '',
      materialType: editProductInfo.isEdit ? preFillValue.materialType : '',
      unitOfMeasurement: editProductInfo.isEdit
        ? preFillValue.unitOfWeight
        : '',
      unitOfMeasurementTwo: editProductInfo.isEdit
        ? preFillValue.unitOfDimension
        : '',
      width: editProductInfo.isEdit ? preFillValue.widthOfproduct : '',
      height: editProductInfo.isEdit ? preFillValue.heightOfProduct : '',
      depth: editProductInfo.isEdit ? preFillValue.lengthOfProduct : '',
      productTypeId: editProductInfo.isEdit ? preFillValue.productIdType : '',
    },
    validationSchema: productVistalInfo,
    onSubmit: values => {
      console.log(
        '🚀 ~ file: AddProductInfo.js:395 ~ CatalogAddProductInfo ~ values:',
        values,
      );

      setisTrue(true);
      let prepareData;
      if (editProductInfo.isEdit) {
        prepareData = {
          category: editProductInfo.isEdit
            ? editProductInfo?.item?.category
            : cat.category,
          subCategory: editProductInfo.isEdit
            ? editProductInfo?.item?.subCategory
            : cat.subCategory,
          pid: editProductInfo?.item?.id,
          info: {
            brandName: values.brandName,
            cirtificates: documentId,
            color: values.Colour,
            countryOfOrigin: values.CountryOfOrigin,
            includedItem: values.includedItems,
            lenghtOfProduct: values.depth,
            heightOfProduct: values.height,
            materialType: values.materialType,
            onHandQuantity: values.onHandQuantity,
            productId: values.productID,
            productIdType: values.productTypeId,
            productName: values.productName,
            productTitle: values.productTitle,
            productType: values.productType,
            restockLevel: values.restockLevel,
            shape: values.shape,
            stockStatus: values.stockStatus,
            taxClass: values.TaxClass,
            unitOfMeasurementDimension: values.unitOfMeasurement,
            unitOfMeasurementWeight: values.unitOfMeasurementTwo,
            weightOfProduct: values.weightOfProduct,
            widthOfProduct: values.width,
          },
        };
      } else {
        prepareData = {
          category: cat.category,
          subCategory: cat.subCategory,
          info: {
            brandName: values.brandName,
            cirtificates: documentId,
            color: values.Colour,
            countryOfOrigin: values.CountryOfOrigin,
            includedItem: values.includedItems,
            lenghtOfProduct: values.depth,
            heightOfProduct: values.height,
            materialType: values.materialType,
            onHandQuantity: values.onHandQuantity,
            productId: values.productID,
            productIdType: values.productTypeId,
            productName: values.productName,
            productTitle: values.productTitle,
            productType: values.productType,
            restockLevel: values.restockLevel,
            shape: values.shape,
            stockStatus: values.stockStatus,
            taxClass: values.TaxClass,
            unitOfMeasurementDimension: values.unitOfMeasurement,
            unitOfMeasurementWeight: values.unitOfMeasurement,
            unitOfDimension: values.unitOfMeasurementTwo,
            weightOfProduct: values.weightOfProduct,
            widthOfProduct: values.width,
          },
        };
      }
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

      console.log(
        '🚀 ~ file: AddProductInfo.js:339 ~ CatalogAddProductInfo ~ documentId:',
        documentId,
      );
      if (documentId !== '') {
        axios(config)
          .then(Response => {
            navigation.navigate('PricingInfo');
            dispatch(productInformation(Response?.data?.results));
            console.log('Response', Response);
          })
          .catch(err => {
            console.log(
              '🚀 ~ file: AddProductInfo.js:351 ~ CatalogAddProductInfo ~ err:',
              err,
            );
            alert('something went wrong');
          });
      } else {
        alert('Please upload document');
      }
    },
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer} nestedScrollEnabled={true}>
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

          <CatalogNavBar ind={0} navigation={navigation} />

          <View style={{marginTop: 15}}>
            <AppTextInput
              label={'Product Name'}
              icon
              require
              onChangeText={handleChange('productName')}
              error={touched.productName ? errors.productName : ''}
              value={values.productName}
              onBlur={handleBlur('productName')}
            />
            <AppTextInput
              label={'Product Title'}
              icon
              require
              onChangeText={handleChange('productTitle')}
              error={touched.productTitle ? errors.productTitle : ''}
              value={values.productTitle}
              onBlur={handleBlur('productTitle')}
            />
            <AppTextInput
              label={'Product ID'}
              icon
              // onChangeText={handleChange('productID')}
              // error={touched.productID ? errors.productID : ''}
              value={values.productID}
              editable={false}
              // onBlur={handleBlur('productID')}
            />
            <AppDropDown
              data={['Generic', 'GTIN', 'ISBN', 'UPC', 'EAN']}
              label={'Product Id Type'}
              error={touched.productTypeId ? errors.productTypeId : ''}
              onChange={item => {
                setFieldValue('productTypeId', item);
              }}
              onBlur={() => setFieldTouched('productTypeId', true)}
              value={values.productTypeId}
              defaultValue={values.productTypeId}
            />
            <AppTextInput
              label={'Brand Name'}
              icon
              require
              onChangeText={handleChange('brandName')}
              error={touched.brandName ? errors.brandName : ''}
              value={values.brandName}
              onBlur={handleBlur('brandName')}
            />
            <AppTextInput
              label={'Product Type'}
              icon
              require
              onChangeText={handleChange('productType')}
              error={touched.productType ? errors.productType : ''}
              value={values.productType}
              onBlur={handleBlur('productType')}
            />
            <AppDropDown
              data={['Available', 'Out-off stock']}
              value={values.stockStatus}
              defaultValue={values.stockStatus}
              label={'Stock status'}
              error={touched.stockStatus ? errors.stockStatus : ''}
              onChange={item => {
                setFieldValue('stockStatus', item);
              }}
              onBlur={() => setFieldTouched('stockStatus', true)}
            />
            <AppTextInput
              label={'Weight of Product'}
              icon
              require
              onChangeText={handleChange('weightOfProduct')}
              error={touched.weightOfProduct ? errors.weightOfProduct : ''}
              value={values.weightOfProduct}
              onBlur={handleBlur('weightOfProduct')}
            />
            <AppDropDown
              data={['mm', 'cm', 'm', 'ft', 'in']}
              label={'Unit of Measurement (UOM)'}
              error={touched.unitOfMeasurement ? errors.unitOfMeasurement : ''}
              onChange={item => {
                setFieldValue('unitOfMeasurement', item);
              }}
              onBlur={() => setFieldTouched('unitOfMeasurement', true)}
              value={values.unitOfMeasurement}
              defaultValue={values.unitOfMeasurement}
            />
            <View style={{marginBottom: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  Dimensions of product
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
                  onChangeText={handleChange('width')}
                  error={touched.width ? errors.width : ''}
                  value={values.width}
                  onBlur={handleBlur('width')}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                />
                <AppTextInput
                  label={'Length/Height'}
                  onChangeText={handleChange('height')}
                  error={touched.height ? errors.height : ''}
                  value={values.height}
                  onBlur={handleBlur('height')}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                />
                <AppTextInput
                  label={'Depth'}
                  onChangeText={handleChange('depth')}
                  error={touched.depth ? errors.depth : ''}
                  value={values.depth}
                  onBlur={handleBlur('depth')}
                  textInputStyle={{
                    width: Dimensions.get('window').width / 3 - 30,
                  }}
                />
              </View>
            </View>
            <AppDropDown
              data={['mm', 'cm', 'm', 'ft', 'in']}
              label={'Unit of Measurement (UOM)'}
              error={
                touched.unitOfMeasurementTwo ? errors.unitOfMeasurementTwo : ''
              }
              onChange={item => {
                setFieldValue('unitOfMeasurementTwo', item);
              }}
              onBlur={() => setFieldTouched('unitOfMeasurementTwo', true)}
              value={values.unitOfMeasurementTwo}
              defaultValue={values.unitOfMeasurementTwo}
            />
            <AppDropDown
              data={['India', 'Nepal']}
              label={'Country of Origin'}
              error={touched.CountryOfOrigin ? errors.CountryOfOrigin : ''}
              onChange={item => {
                setFieldValue('CountryOfOrigin', item);
              }}
              onBlur={() => setFieldTouched('CountryOfOrigin', true)}
              value={values.CountryOfOrigin}
              defaultValue={values.CountryOfOrigin}
            />
            <AppTextInput
              label={'Included Items'}
              icon
              require
              onChangeText={handleChange('includedItems')}
              error={touched.includedItems ? errors.includedItems : ''}
              value={values.includedItems}
              onBlur={handleBlur('includedItems')}
            />
            <View style={{marginBottom: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  Certificate
                </Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <TouchableOpacity
                onPress={pickAPDF}
                style={{
                  backgroundColor: '#F8F8F8',
                  borderWidth: 1,
                  borderColor: '#d9d9d9',
                  height: 40,
                  marginTop: 8,
                  paddingHorizontal: 15,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    marginRight: 4,
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000',
                  }}>
                  {documentId}
                </Text>
              </TouchableOpacity>
              {documentId === '' && isTrue && (
                <Text
                  style={{marginVertical: 4, color: 'red', marginBottom: 10}}>
                  Please select file
                </Text>
              )}
            </View>
            <AppTextInput
              label={'On hand Quantity'}
              icon
              require
              onChangeText={handleChange('onHandQuantity')}
              error={touched.onHandQuantity ? errors.onHandQuantity : ''}
              value={values.onHandQuantity}
              onBlur={handleBlur('onHandQuantity')}
            />
            <AppTextInput
              label={'Restock level'}
              icon
              require
              onChangeText={handleChange('restockLevel')}
              error={touched.restockLevel ? errors.restockLevel : ''}
              value={values.restockLevel}
              onBlur={handleBlur('restockLevel')}
            />
            <AppDropDown
              data={['Taxable', 'Non-taxable']}
              label={'Tax class'}
              error={touched.TaxClass ? errors.TaxClass : ''}
              onChange={item => {
                setFieldValue('TaxClass', item);
              }}
              onBlur={() => setFieldTouched('TaxClass', true)}
              value={values.TaxClass}
              defaultValue={values.TaxClass}
            />
            <AppTextInput
              label={'Colour'}
              icon
              require
              onChangeText={handleChange('Colour')}
              error={touched.Colour ? errors.Colour : ''}
              value={values.Colour}
              onBlur={handleBlur('Colour')}
            />
            <AppDropDown
              data={['Square', 'Circle']}
              label={'Shape'}
              error={touched.shape ? errors.shape : ''}
              onChange={item => {
                setFieldValue('shape', item);
              }}
              onBlur={() => setFieldTouched('shape', true)}
              value={values.shape}
              defaultValue={values.shape}
            />
            <AppDropDown
              data={['Nothing', 'Nothing']}
              label={'Material type'}
              error={touched.materialType ? errors.materialType : ''}
              onChange={item => {
                setFieldValue('materialType', item);
              }}
              onBlur={() => setFieldTouched('materialType', true)}
              value={values.materialType}
              defaultValue={values.materialType}
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

export default CatalogAddProductInfo;

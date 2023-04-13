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
  Alert,
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
import {useDispatch, useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import productInfoData from './ApiData';
import {useEffect} from 'react';
import {editProductInfoAction} from '../reducers/UserReducer/user_actions';

const CatalogImages = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const token = useSelector(state => state.userDetails.login_token);
  const cat = useSelector(state => state.userDetails.categoryDetail);
  const productInformation = useSelector(
    state => state.userDetails.productInformation,
  );

  const editProductInfo = useSelector(
    state => state.userDetails.editProductInfo,
  );

  const [refresh, setRefresh] = useState(false);

  const [randomImage, setRandomImage] = useState([]);
  const [images, setImages] = useState({
    image1: {},
    image2: {},
    image3: {},
    image4: {},
  });

  const [errors, setErrors] = useState('');
  const [imageIds, setImageIds] = useState([]);

  useEffect(() => {
    setRefresh(!refresh);
    if (randomImage.length === 4) {
      setRefresh(!refresh);
    }
  }, [randomImage]);

  const convertImageToBase64 = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const getImageId = async (res, number) => {
    console.log('🚀 ~ file: CatalogImages.js:80 ~ getImageId ~ res:', res);
    if (res.base64.includes('base64')) {
      console.log('In if condition');
      res.base64 = res.base64.split('base64,')[1];
    }

    let __data = {
      fileName: res.name,
      usecaseName: 'imageupload',
      fileContent: res.base64,
    };

    console.log(
      '🚀 ~ file: CatalogImages.js:90 ~ getImageId ~ __data:',
      __data,
    );

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://18.234.206.45:8085/api/v1/files/upload',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(__data),
    };

    console.log('Data', config);

    axios(config)
      .then(res => {
        console.log(res, 'res');
        console.log(
          res.data?.results?.documentId,
          'res.data?.results?.documentId',
        );
        setImageIds(imageIds => [
          ...imageIds,
          {id: res.data?.results?.documentId},
        ]);
      })
      .catch(err => {
        console.log(err, 'er');
      });
  };

  const pickImage = async number => {
    try {
      DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      })
        .then(res => {
          switch (number) {
            case '1':
              convertImageToBase64(res.uri).then(response => {
                res.base64 = response;
                setImages({...images, image1: res});
              });
              break;
            case '2':
              convertImageToBase64(res.uri).then(response => {
                res.base64 = response;
                setImages({...images, image2: res});
              });
              break;
            case '3':
              convertImageToBase64(res.uri).then(response => {
                res.base64 = response;
                setImages({...images, image3: res});
              });
              break;
            case '4':
              convertImageToBase64(res.uri).then(response => {
                res.base64 = response;
                setImages({...images, image4: res});
              });
              break;
            case '5':
              convertImageToBase64(res.uri).then(response => {
                res.base64 = response;
                setImages({...images, image5: res});
              });
              break;
            default:
              setImages({...images});
              break;
          }
          setErrors('');
        })
        .catch(err => {
          console.log(err, 'err');
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the image pick action');
      } else {
        console.log('Error: ', err);
      }
    }
  };

  const requestMediaLibraryPermission = async task => {
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
        pickImage(task);
      } else {
        Alert.alert('', 'Media Library Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const apiCall = () => {
    const prepareData = {
      category: cat.category,
      subCategory: cat.subCategory,
      pid: productInformation.id,
      images: {
        documentId1: imageIds[0]?.id ?? null,
        documentId2: imageIds[1]?.id ?? null,
        documentId3: imageIds[2]?.id ?? null,
        documentId4: imageIds[3]?.id ?? null,
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
        navigation.navigate('VariationsInfo');
      })
      .catch(err => {
        console.log('Error', err);
      });
  };
  useEffect(() => {
    if (imageIds?.length >= 1) {
      apiCall();
    }
  }, [imageIds]);

  const submitImages = () => {
    console.log('images', images);
    if (
      Object.keys(images.image1).length !== 0 ||
      Object.keys(images.image2).length !== 0 ||
      Object.keys(images.image3).length !== 0 ||
      Object.keys(images.image4).length !== 0
    ) {
      for (let key in images) {
        if (Object.keys(images[key]).length !== 0) {
          getImageId(images[key]);
        }
      }
    } else {
      setErrors('Please select at least one image');
    }
  };

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
        const response = res?.data?.results?.productImage;

        let i = 0;
        for (let ke in images) {
          i = i + 1;

          try {
            axios
              .get(
                'http://18.234.206.45:8085/api/v1/files/download/' +
                  response['documentId' + i],
                {
                  headers: {
                    Authorization: 'Bearer ' + token,
                  },
                },
              )
              .then(res => {
                console.log(res, `this =============== ${i}`);
                setRefresh(!refresh);
                setRandomImage(randomImage => [...randomImage, {test: 1}]);
                images[ke] = {
                  uri: res?.data?.results.url,
                  base64: res?.data?.results.fileContent,
                  name: res?.data?.results.filename,
                };
              })
              .catch(err => {
                setRandomImage(randomImage => [...randomImage, {test: 1}]);
                console.log(err, 'err');
              });
          } catch (err) {
            console.log(err);
          }
        }
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
            {`${cat.category} > ${cat.subCategory}`}
          </Text>
          <CatalogNavBar ind={3} navigation={navigation} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                requestMediaLibraryPermission('1');
              }}
              style={{
                borderWidth: 1.5,
                width: Dimensions.get('window').width / 3 - 20,
                height: Dimensions.get('window').width / 3 - 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {images?.image1?.uri !== '' &&
              images?.image1?.uri !== undefined ? (
                <Image
                  source={{uri: images?.image1?.uri}}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'rgba(255, 102, 88, 0.15)',
                    height: '80%',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../assets/Camera.png')}
                    style={{marginTop: 5}}
                  />
                  <Text style={{fontSize: 12, fontWeight: '600'}}>Upload</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                requestMediaLibraryPermission('2');
              }}
              style={{
                borderWidth: 1.5,
                width: Dimensions.get('window').width / 3 - 20,
                height: Dimensions.get('window').width / 3 - 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {images?.image2?.uri !== '' &&
              images?.image2?.uri !== undefined ? (
                <Image
                  source={{uri: images?.image2?.uri}}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'rgba(255, 102, 88, 0.15)',
                    height: '80%',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../assets/Camera.png')}
                    style={{marginTop: 5}}
                  />
                  <Text style={{fontSize: 12, fontWeight: '600'}}>Upload</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                requestMediaLibraryPermission('3');
              }}
              style={{
                borderWidth: 1.5,
                width: Dimensions.get('window').width / 3 - 20,
                height: Dimensions.get('window').width / 3 - 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {images?.image3?.uri !== '' &&
              images?.image3?.uri !== undefined ? (
                <Image
                  source={{uri: images?.image3?.uri}}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'rgba(255, 102, 88, 0.15)',
                    height: '80%',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../assets/Camera.png')}
                    style={{marginTop: 5}}
                  />
                  <Text style={{fontSize: 12, fontWeight: '600'}}>Upload</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                requestMediaLibraryPermission('4');
              }}
              style={{
                borderWidth: 1.5,
                width: Dimensions.get('window').width / 3 - 20,
                height: Dimensions.get('window').width / 3 - 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 18,
              }}>
              {images?.image4?.uri !== '' &&
              images?.image4?.uri !== undefined ? (
                <Image
                  source={{uri: images?.image4?.uri}}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'rgba(255, 102, 88, 0.15)',
                    height: '80%',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../assets/Camera.png')}
                    style={{marginTop: 5}}
                  />
                  <Text style={{fontSize: 12, fontWeight: '600'}}>Upload</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                requestMediaLibraryPermission('5');
              }}
              style={{
                borderWidth: 1.5,
                width: Dimensions.get('window').width / 3 - 20,
                height: Dimensions.get('window').width / 3 - 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {images?.image5?.uri !== '' &&
              images?.image5?.uri !== undefined ? (
                <Image
                  source={{uri: images?.image5?.uri}}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: 'rgba(255, 102, 88, 0.15)',
                    height: '80%',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../assets/Camera.png')}
                    style={{marginTop: 5}}
                  />
                  <Text style={{fontSize: 12, fontWeight: '600'}}>Upload</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          {errors !== '' && (
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'red',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                {errors}
              </Text>
            </View>
          )}

          <View style={{marginTop: 15}}>
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
                onPress={() => {
                  submitImages();
                  // navigation.navigate('VariationsInfo');
                }}>
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

export default CatalogImages;

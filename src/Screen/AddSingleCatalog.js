import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import styles from './Shop/CatalogUpload/cataloguploadstyle';
import CatalogBox from '../Components/CatalogBox/CatalogBox';
import OverviewBox from '../Components/OverviewBox/OverviewBox';
import SingleUploads from '../Components/SingleUploads/SingleUploads';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import {useEffect} from 'react';
import {BackpackRounded, SettingsInputHdmiRounded} from '@mui/icons-material';
import {useState} from 'react';
import axios from 'axios';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {
  category_subCategory,
  editProductInfo,
  editProductInfoAction,
} from '../reducers/UserReducer/user_actions';

const AddSingleCatalog = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = useSelector(state => state.userDetails.login_token);

  const [categoryInd, setCategoryInd] = useState();
  const [subcategoryInd, setSubCategoryInd] = useState();
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const test = {};

  const getAllData = async () => {
    try {
      const headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };

      const res = await axios.get(
        'http://18.234.206.45:8085/api/v1/category',

        {headers},
      );
      return res;
    } catch (error) {
      console.log(
        '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
        error,
      );
    }
  };

  const getSubCategory = async state => {
    try {
      const headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };

      const res = await axios.get(
        `http://18.234.206.45:8085/api/v1/category/${state}/subcategory`,
        {headers},
      );
      setSubCategoryData(res?.data?.results);
    } catch (error) {
      console.log(
        '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
        error,
      );
    }
  };

  useEffect(() => {
    getAllData()
      .then(res => {
        setCategoryData(res?.data?.results);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }, []);
  const prepareData = {
    category: category,
    subCategory: subCategory,
  };

  const [serarchData, setSearchData] = useState([]);

  const searchText = async text => {
    try {
      const headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };

      const res = await axios.get(
        `http://18.234.206.45:8085/api/v1/category/subcategory/search?query=${text}`,
        {headers},
      );
      console.log(res, 'res');
      setSearchData(res?.data?.results);
    } catch (error) {
      console.log(
        '🚀 ~ file: PersonalDetails.js:35 ~ getAllData ~ error:',
        error,
      );
    }
  };

  var items = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'React Native',
    },
  ];

  console.log(serarchData, 'serarchData');

  const [categoryToggle, setCategoryToggle] = useState(false);
  const [subcategoryToggle, setSubCategoryToggle] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        height: Dimensions.get('window').height * 1,
      }}>
      <ScrollView contentContainerStyle={{flex: 1}} nestedScrollEnabled={true}>
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
            <Text style={[styles.catalogbottomtext, {fontSize: 16}]}>
              Catalog uploads &gt; Add Single Catalog
            </Text>
            <View style={styles.catalogsearchbox}>
              <TextInput
                style={[styles.catalogsearchinput, {height: 40, fontSize: 13}]}
                placeholder="Search by Gemstones, Rudraksha, Pooja Samagri, Deities"
                placeholderTextColor={'#939393'}
                onChangeText={value => {
                  if (value === '') {
                    getAllData()
                      .then(res => {
                        setCategoryData(res?.data?.results);
                      })
                      .catch(error => {
                        console.log(error, 'error');
                      });
                  } else {
                    searchText(value);
                  }
                }}
                onFocus={() => {
                  setHide(true);
                }}
              />
              <Image
                style={styles.searchIcon}
                source={require('../assets/Icons/searchicon.png')}
              />
            </View>
          </View>

          {hide && (
            <>
              <View
                style={{
                  height: Dimensions.get('window').height * 0.7,
                }}>
                <TouchableOpacity onPress={() => setHide(false)}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'right',
                      marginBottom: 10,
                      paddingVertical: 8,
                      marginTop: -10,
                      marginRight: 20,
                    }}>
                    Close
                  </Text>
                </TouchableOpacity>
                <FlatList
                  data={serarchData}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => {
                          setHide(false);
                          setCategory(item?.category?.title);
                          setSubCategory(item?.title);
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            textAlign: 'center',
                            marginBottom: 15,
                            backgroundColor: '#fff',
                            paddingVertical: 8,
                            width: '90%',
                            borderRadius: 10,
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </>
          )}

          {!hide && (
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View style={{width: '45%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setCategoryToggle(!categoryToggle);
                  }}
                  style={{
                    height: 42,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '700', color: '#000'}}>
                    {category === '' ? 'Select a Category' : category}
                  </Text>
                </TouchableOpacity>
                {categoryToggle && (
                  <FlatList
                    data={categoryData}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{
                      width: '100%',
                      height: '60%',
                    }}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setCategoryInd(index);
                            setCategoryToggle(!categoryToggle);
                            setCategory(item?.title);
                            getSubCategory(item?.id);
                          }}
                          style={{
                            height: 42,
                            backgroundColor:
                              index === categoryInd ? '#FF6658' : '#D9D9D980',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: index === categoryInd ? '700' : '400',
                              color: index === categoryInd ? '#fff' : '#000',
                              paddingLeft: 15,
                            }}>
                            {item?.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                )}
              </View>

              <View style={{width: '45%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSubCategoryToggle(!subcategoryToggle);
                  }}
                  style={{
                    height: 42,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '700', color: '#000'}}>
                    {subCategory === '' ? 'Sub Category' : subCategory}
                  </Text>
                </TouchableOpacity>
                {subcategoryToggle && (
                  <FlatList
                    data={subCategoryData}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{width: '100%', height: '60%'}}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setSubCategoryInd(index);
                            setSubCategoryToggle(!subcategoryToggle);
                            setSubCategory(item?.title);
                          }}
                          style={{
                            height: 42,
                            justifyContent: 'center',
                            backgroundColor:
                              index === subcategoryInd
                                ? '#FF6658'
                                : '#D9D9D980',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight:
                                index === subcategoryInd ? '700' : '400',
                              color: index === subcategoryInd ? '#fff' : '#000',
                              paddingLeft: 15,
                            }}>
                            {item?.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                )}
              </View>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
      {!hide && (
        <TouchableOpacity
          style={{
            height: 45,
            width: '70%',
            backgroundColor: '#FF6658',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 60,
          }}
          disabled={categoryInd === undefined || subcategoryInd === undefined}
          onPress={() => {
            navigation.navigate('CatalogAddProductInfo');
            console.log(prepareData, 'prepareData');
            dispatch(category_subCategory(prepareData));
            dispatch(editProductInfoAction({}));
          }}>
          <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
            Continue
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddSingleCatalog;

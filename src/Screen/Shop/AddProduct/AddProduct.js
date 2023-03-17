import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './addproductstyle';
import AddProductInfo from '../../../Components/AddProductInfo/AddProductInfo';
import SelectCategory from '../../../Components/SelectCategory/SelectCategory';

const AddProduct = ({navigation}) => {
  const [clickbtn, setClickBtn] = useState('Add Product Info');

  const onPress = () => {
    navigation.navigate('Single Catalog');
  };

  const onCPress = () => {
    navigation.navigate('Detail');
  };

  const onCancelPress = () => navigation.goBack();

  const [pricemodelshow, setPriceModelShow] = useState(false);

  const [variationsmodelshow, setVariationsModelShow] = useState(false);

  const renderProductComp = (
    type,
    setClickBtn,
    onPress,
    onCancelPress,
    pricemodelshow,
    setPriceModelShow,
    variationsmodelshow,
    setVariationsModelShow,
    onCPress,
  ) => {
    if (type === 'Select Category') {
      return <SelectCategory onCPress={onCPress} />;
    }

    if (type === 'Add Product Info') {
      return (
        <AddProductInfo
          setClickBtn={setClickBtn}
          onCancelPress={onCancelPress}
          show={pricemodelshow}
          setShow={setPriceModelShow}
          variationshow={variationsmodelshow}
          setVariationShow={setVariationsModelShow}
        />
      );
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.ordercontainer}>
        <View style={styles.dashboardheader}>
          <View style={styles.dashboardlogohead}>
            <Image source={require('../../../assets/Icons/menu-icon.png')} />

            <View style={styles.dashboardlogo}>
              <Image source={require('../../../assets/Icons/logo-white.png')} />
              <Text style={styles.dashboardlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.dashboardheadertextcontainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => setClickBtn('Select Category')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 22}]}>
                  <Text
                    style={
                      clickbtn === 'Select Category'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Select Category
                  </Text>
                  <View
                    style={
                      clickbtn === 'Select Category' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setClickBtn('Add Product Info')}>
                <View style={styles.dashboardheadertextheadprod}>
                  <Text
                    style={
                      clickbtn === 'Add Product Info'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Add Product Info
                  </Text>
                  <View
                    style={
                      clickbtn === 'Add Product Info' &&
                      styles.dashboardheadertextlineprod
                    }></View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderProductComp(
            clickbtn,
            setClickBtn,
            onPress,
            onCancelPress,
            pricemodelshow,
            setPriceModelShow,
            variationsmodelshow,
            setVariationsModelShow,
            onCPress,
          )}
        </View>
      </SafeAreaView>

      {pricemodelshow && (
        <View style={styles.pricemodelhead}>
          <View style={styles.pricemodelpopup}>
            <Pressable onPress={() => setPriceModelShow(!pricemodelshow)}>
              <Image
                style={styles.popupicon}
                source={require('../../../assets/Icons/cross-icon.png')}
              />
            </Pressable>
            <View style={styles.pricemodelpopupinner}>
              <View style={styles.table}>
                <View style={styles.tablerowone}>
                  <Text style={styles.fontweight}>Amount in Rs.</Text>
                </View>

                <View style={styles.tablerowtwo}>
                  <View style={styles.tablerowitemone}>
                    <Text>Your Selling Price</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text>5000</Text>
                  </View>
                </View>

                <View style={styles.tablerowtwo}>
                  <View style={styles.tablerowitemone}>
                    <Text>Commission Fee</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text>500</Text>
                  </View>
                </View>

                <View style={styles.tablerowtwo}>
                  <View style={styles.tablerowitemone}>
                    <Text>Convenience Fee</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text>100</Text>
                  </View>
                </View>

                <View style={styles.tablerowtwo}>
                  <View style={styles.tablerowitemone}>
                    <Text>Shipping Fee</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text>100</Text>
                  </View>
                </View>

                <View style={styles.tablerowtwo}>
                  <View style={styles.tablerowitemone}>
                    <Text>GST</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text>1026</Text>
                  </View>
                </View>

                <View style={styles.tablerowlast}>
                  <View style={styles.tablerowitemone}>
                    <Text style={styles.fontweight}>Total listing price</Text>
                  </View>
                  <View style={styles.tablerowitemtwo}>
                    <Text style={styles.fontweight}>6726</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}

      {variationsmodelshow && (
        <View style={styles.pricemodelhead}>
          <View style={styles.variationsmodelpopup}>
            <Pressable
              onPress={() => setVariationsModelShow(!variationsmodelshow)}>
              <Image
                style={styles.popupicon}
                source={require('../../assets/Icons/cross-icon.png')}
              />
            </Pressable>

            <View style={styles.variationsmodeltextbox}>
              <Text style={styles.variationsmodeltext}>
                Your Listing has been successfully submitted.{'\n'}The listing
                will be displayed once QC is{'\n'}approved by Admin
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default AddProduct;

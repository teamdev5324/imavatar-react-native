import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './detailstyle';
import DetailPricingComp from '../../../Components/DetailPricingComp/DetailPricingComp';

const Detail = ({navigation}) => {
  const [detailclickbtn, setDetailClickBtn] = useState('Pricing');

  const onSPress = () => navigation.navigate('Catalog Upload');

  const onCPress = () => navigation.navigate('Catalog Upload');

  return (
    <ScrollView>
      <SafeAreaView style={styles.deatilcontainer}>
        <View style={styles.deatilheader}>
          <View style={styles.deatillogohead}>
            <Image source={require('../../assets/Icons/leftarrow.png')} />

            <View style={styles.deatillogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.deatillogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.deatilheadertexthead}>
            <Text style={styles.deatilheadertext}>Add More details</Text>
            <View style={styles.deatilheadertextline}></View>
          </View>
        </View>

        <View style={styles.detailcompcontainerhead}>
          <View style={styles.detailinfobtnbox}>
            <TouchableOpacity
              onPress={() => setDetailClickBtn('Product Vital Info')}
              style={styles.detailinfobtn}>
              <Text
                style={
                  detailclickbtn === 'Product Vital Info'
                    ? styles.detailinfobtntextcolor
                    : styles.btntext
                }>
                Product{'\n'}Vital Info
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDetailClickBtn('Pricing')}
              style={[
                styles.detailinfobtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  detailclickbtn === 'Pricing'
                    ? styles.detailinfobtntextcolor
                    : styles.btntext
                }>
                Pricing
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDetailClickBtn('Description')}
              style={[
                styles.detailinfobtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  detailclickbtn === 'Description'
                    ? styles.detailinfobtntextcolor
                    : styles.btntext
                }>
                Description
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDetailClickBtn('ImagesVideos')}
              style={[
                styles.detailinfobtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  detailclickbtn === 'ImagesVideos'
                    ? styles.detailinfobtntextcolor
                    : styles.btntext
                }>
                Images/Videos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setDetailClickBtn('Variations')}
              style={[
                styles.detailinfobtn,
                {borderLeftWidth: 1, borderLeftColor: '#D9D9D9'},
              ]}>
              <Text
                style={
                  detailclickbtn === 'Variations'
                    ? styles.detailinfobtntextcolor
                    : styles.btntext
                }>
                Variations
              </Text>
            </TouchableOpacity>
          </View>

          <DetailPricingComp
            onDPSBtnPress={onSPress}
            onDPCancelPress={onCPress}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Detail;

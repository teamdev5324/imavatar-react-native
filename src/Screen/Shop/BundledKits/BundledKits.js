import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './bundledkitsstyle';
import CreateListing from '../../../Components/CreateListing/CreateListing';

const BundledKits = ({navigation}) => {
  const [clickelement, setClickElement] = useState('Create Listing');

  const onPress = () => {
    navigation.navigate('Single Catalog');
  };

  const renderBundleKitComp = (type, onPress) => {
    if (type === 'Create Listing') {
      return <CreateListing onPress={onPress} />;
    }

    if (type === 'In Progress Listing') {
      return <CreateListing />;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.ordercontainer}>
        <View style={styles.dashboardheader}>
          <View style={styles.dashboardlogohead}>
            <Image source={require('../../assets/Icons/menu-icon.png')} />

            <View style={styles.dashboardlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.dashboardlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.dashboardheadertextcontainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => setClickElement('Create Listing')}>
                <View
                  style={[styles.dashboardheadertexthead, {marginRight: 22}]}>
                  <Text
                    style={
                      clickelement === 'Create Listing'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    Create Listing
                  </Text>
                  <View
                    style={
                      clickelement === 'Create Listing' &&
                      styles.dashboardheadertextline
                    }></View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setClickElement('In Progress Listing')}>
                <View style={styles.dashboardheadertextheadprog}>
                  <Text
                    style={
                      clickelement === 'In Progress Listing'
                        ? styles.dashboardheadertextbold
                        : styles.dashboardheadertext
                    }>
                    In Progress Listing
                  </Text>
                  <View
                    style={
                      clickelement === 'In Progress Listing' &&
                      styles.dashboardheadertextlineprog
                    }></View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.ordercomcontainer}>
          {renderBundleKitComp(clickelement, onPress)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default BundledKits;

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './supportstyle';
//import {Video, AVPlaybackStatus} from 'expo-av';

const Support = () => {
  const data = ['Payments', 'Inventory', 'Account', 'Catalog & Pricing'];

  const [text, onChangeText] = useState('');

  const video = useRef(null);

  const [status, setStatus] = useState({});

  return (
    <ScrollView>
      <SafeAreaView style={styles.paymentcontainer}>
        <View style={styles.paymentheader}>
          <View style={styles.paymentlogohead}>
            <Image source={require('../../assets/Icons/leftarrow.png')} />

            <View style={styles.paymentlogo}>
              <Image source={require('../../assets/Icons/logo-white.png')} />
              <Text style={styles.paymentlogotext}>imavatar</Text>
            </View>
          </View>

          <View style={styles.paymentheadertexthead}>
            <Text style={styles.paymentheadertext}>Support</Text>
            <View style={styles.paymentheadertextline}></View>
          </View>
        </View>

        <View style={styles.supportbottomhead}>
          <View style={styles.supportfirstboxhead}>
            <View style={styles.helpbox}>
              <Text style={styles.fontbold}>Help</Text>
              <View style={styles.helpiconbox}>
                <Image source={require('../../assets/Icons/phone.png')} />
              </View>
            </View>

            <View style={styles.supportselectbox}>
              <View style={styles.selectbox}>
                <Text style={styles.fontbold}>Select Issue Category</Text>
                <SelectDropdown
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  data={data}
                  defaultButtonText={'Select'}
                  renderDropdownIcon={isOpened => {
                    return (
                      <FontAwesome
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#000'}
                        size={12}
                      />
                    );
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                />
              </View>

              <View style={styles.textareaboxhead}>
                <Text style={styles.fontbold}>Describe{'\n'}your Issue</Text>
                <TextInput
                  style={styles.textareabox}
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                  placeholder="Help us understand the issue by giving a brief
                                                 description of it. Add screenshots if required."
                  onChangeText={text => onChangeText(text)}
                  value={text}
                />

                <View style={styles.uploadbox}>
                  <Image
                    source={require('../../../assets/Images/Camera.png')}
                  />
                  <Text>Upload</Text>
                </View>
              </View>

              <View style={styles.btnhead}>
                <Pressable style={styles.btn}>
                  <Text style={styles.btntext}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.supportsecondboxhead}>
            <View style={styles.faqbox}>
              <Text style={styles.fontbold}>FAQs</Text>
            </View>

            <View style={styles.faqtextbox}>
              <Text>1. My catalog is not live</Text>
              <Text>2. I have not received my Return shipment</Text>
              <Text>3. My orders are not yet picked up</Text>
            </View>
          </View>

          <View style={styles.videobox}>
            <Text style={styles.fontbold}>Videos</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.videosliderbox}>
            <View style={styles.videoslideritem}>
              {/* <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              /> */}
              <Text style={styles.fontbold}>Bulk upload the listing</Text>
            </View>

            <View style={styles.videoslideritem}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
              <Text style={styles.fontbold}>Manage the Inventory</Text>
            </View>

            <View style={styles.videoslideritem}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
              <Text style={styles.fontbold}>Manage the Inventory</Text>
            </View>
          </ScrollView>

          <View style={styles.supportthirdboxhead}>
            <View style={styles.faqbox}>
              <Text style={styles.fontbold}>
                Partner Relationship Manager Information
              </Text>
            </View>

            <View style={styles.faqtextbox}>
              <View style={styles.addresshead}>
                <Text style={styles.addresstextone}>Name</Text>
                <Text>Aditya Singh</Text>
              </View>

              <View style={styles.addressheadmiddle}>
                <Text style={styles.addresstexttwo}>Email ID</Text>
                <Text>aditya.info@imavatar.com</Text>
              </View>

              <View style={styles.addresshead}>
                <Text style={styles.addresstextthree}>Mobile No.</Text>
                <Text>9898895588</Text>
              </View>
            </View>
          </View>

          <View style={styles.msgiconbox}>
            <Image source={require('../../assets/Icons/msg.png')} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Support;

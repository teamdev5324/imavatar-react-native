import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './loginwithotpstyle';
import {useNavigation} from '@react-navigation/native';
import {
  useLoginUserMutation,
  useSendOTPUserMutation,
} from '../../../Store/Services/userAuthApi';
import {storeToken} from '../../../Store/Services/AsyncStorageService';
import CryptoJS from 'crypto-js';

export default function LoginWithOTPScreen() {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');

  const [partnerType, setPartnerType] = useState('admin');

  const [userType, setUserType] = useState('6');

  const [sendOTPUser] = useSendOTPUserMutation();

  const clearTextInput = () => {
    setUserName('');
  };

  const handleOTPLoginSubmit = async () => {
    if (userName) {
      const formData = {partnerType, userName, userType};

      const res = await sendOTPUser(formData);

      console.log(res);

      if (res.data.status === 'SUCCESS') {
        clearTextInput();
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userName)) {
          navigation.navigate('MobileLoginOTPVerification', {
            userName: userName,
          });
        } else {
          navigation.navigate('EmailLoginOTPVerification', {
            userName: userName,
          });
        }
      }
      if (res.data.status === 'FAILURE') {
        Toast.show({
          type: 'warning',
          position: 'top',
          topOffset: 0,
          text1: res.data.statusMessage,
        });
      }
    } else {
      Toast.show({
        type: 'warning',
        position: 'top',
        topOffset: 0,
        text1: 'All fields are Required',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.crossiconbox}>
        <Image
          style={styles.crossicon}
          source={require('../../assets/Icons/cross-icon.png')}
        />
      </View>

      <View style={styles.loginbox}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Icons/logo.png')} />
          <Text style={styles.logotext}>imavatar</Text>
        </View>

        <Text style={styles.logintext}>Welcome Back Sign in to Continue</Text>

        <View style={styles.logininputbox}>
          <TextInput
            style={[styles.input, styles.inputmargin]}
            placeholder="Enter Email/Mobile number"
            onChangeText={setUserName}
            value={userName}
          />

          <TouchableOpacity
            onPress={handleOTPLoginSubmit}
            style={styles.loginbutton}>
            <Text style={styles.loginbuttontext}>Enter</Text>
          </TouchableOpacity>

          <View style={styles.accounttextbox}>
            <Text style={styles.accounttext}>Don't have an account yet?</Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.accounttextinnner}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

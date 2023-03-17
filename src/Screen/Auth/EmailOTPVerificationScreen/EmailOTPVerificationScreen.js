import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './emailotpverificationstyle';
import {useNavigation} from '@react-navigation/native';
import {useEmailotpverificationMutation} from '../../../Store/Services/userAuthApi';
import {useSelector} from 'react-redux';

export default function EmailOTPVerificationScreen() {
  const registeruser = useSelector(state => state.registerUser.registeruser);

  const user_id = registeruser.id;

  const navigation = useNavigation();

  const [firstvalue, setfirstValue] = useState('');

  const [secondvalue, setsecondValue] = useState('');

  const [thirdvalue, setthirdValue] = useState('');

  const [fourthvalue, setfourthValue] = useState('');

  const [emailotpverification] = useEmailotpverificationMutation();

  const handleEmailOTPSubmit = async () => {
    const code = `${firstvalue}${secondvalue}${thirdvalue}${fourthvalue}`;

    if (code && user_id) {
      const {data} = await emailotpverification({code, user_id});

      console.log(`email OTP Verification: ${data.status}`);

      if (data.status === 'SUCCESS') {
        navigation.navigate('Login');
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
      <Image
        style={styles.imagebackground}
        source={require('../../../assets/Images/Imavatar_flower.png')}
      />

      <View style={styles.verificationbox}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Icons/logo.png')} />
          <Text style={styles.logotext}>imavatar</Text>
        </View>

        <Text style={styles.verificationtext}>Email Verification</Text>

        <View style={styles.verificationtextbox}>
          <Text style={styles.veritext}>
            Enter OTP sent to imavatar@gmail.com{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.veritextinnner}> Change</Text>
          </Pressable>
        </View>

        <View style={styles.otpinputbox}>
          <TextInput
            style={[styles.input, styles.inputmarginright]}
            onChangeText={setfirstValue}
            value={firstvalue}
          />

          <TextInput
            style={[styles.input, styles.inputmarginright]}
            onChangeText={setsecondValue}
            value={secondvalue}
          />

          <TextInput
            style={[styles.input, styles.inputmarginright]}
            onChangeText={setthirdValue}
            value={thirdvalue}
          />

          <TextInput
            style={styles.input}
            onChangeText={setfourthValue}
            value={fourthvalue}
          />
        </View>

        <Text>Code expires in 00:59</Text>

        <Text style={styles.otprequest}>Request OTP</Text>

        <TouchableOpacity
          onPress={handleEmailOTPSubmit}
          style={styles.signupbutton}>
          <Text style={styles.signupbuttontext}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

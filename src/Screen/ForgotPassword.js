import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/ForgotPassword/forgotpasswordstyle';
import {useNavigation} from '@react-navigation/native';

import React, {Component} from 'react';

export class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.crossiconbox}>
          <Image
            style={styles.crossicon}
            source={require('../assets/Icons/cross-icon.png')}
          />
        </View>

        <Image
          style={styles.imagebackground}
          source={require('../assets/Images/Imavatar_flower.png')}
        />

        <View style={styles.verificationbox}>
          <View style={styles.logo}>
            <Image source={require('../assets/Icons/logo.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>

          <Text style={styles.forgotpasstext}>Forgot Password</Text>

          <Text style={styles.fotgotgraytext}>
            Enter the OTP sent to +91******111 and imavatar@gmail.com
          </Text>

          <View style={styles.otpinputbox}>
            <TextInput style={[styles.input, styles.inputmarginright]} />

            <TextInput style={[styles.input, styles.inputmarginright]} />

            <TextInput style={[styles.input, styles.inputmarginright]} />

            <TextInput style={styles.input} />
          </View>

          <Text>Code expires in 04:53</Text>

          <Text style={styles.otprequest}>Resend OTP</Text>

          <TouchableOpacity style={styles.signupbutton}>
            <Text style={styles.signupbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ForgotPassword;

import React, {Component} from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/EmailLoginOTPVerificationScreen/emailloginotpverificationstyle';

export class EmailLoginOTPVerificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagebackground}
          source={require('../assets/Images/Imavatar_flower.png')}
        />

        <View style={styles.verificationbox}>
          <View style={styles.logo}>
            <Image source={require('../assets/Icons/logo.png')} />
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
              // onChangeText={setfirstValue}
              // value={firstvalue}
            />

            <TextInput
              style={[styles.input, styles.inputmarginright]}
              // onChangeText={setsecondValue}
              // value={secondvalue}
            />

            <TextInput
              style={[styles.input, styles.inputmarginright]}
              // onChangeText={setthirdValue}
              // value={thirdvalue}
            />

            <TextInput
              style={styles.input}
              // onChangeText={setfourthValue}
              // value={fourthvalue}
            />
          </View>

          <Text>Code expires in 00:59</Text>

          <Text style={styles.otprequest}>Request OTP</Text>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('EmailOTPVerifiedScreen');
            }}>
            <Text style={styles.signupbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmailLoginOTPVerificationScreen;

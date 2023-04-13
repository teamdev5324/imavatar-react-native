import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import styles from './Auth/LoginScreen/loginstyle';
import {useNavigation} from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import React, {Component} from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import qs from 'qs';
import {userBaseUrl} from '../apiService';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwOTk1IiwiYXV0aCI6InBhcnRuZXIiLCJpZCI6MjM1MSwiaWF0IjoxNjc1MTg1NDE5fQ.oKpjXbeFucVEZQjHLTkmQeSthPukNulgUzj9zpGJlqo';

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export class ForgotPasswordMobileNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pass_visible: '',
      showError: false,
    };
    this.input1 = React.createRef();
    this.input2 = React.createRef();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.crossiconbox}>
            {/* <Image
              style={styles.crossicon}
              source={require('./assets/Icons/cross-icon.png')}
            /> 
          </View> */}

        <View style={styles.loginbox}>
          <View style={styles.logo}>
            <Image source={require('./assets/Icons/logo.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>

          <Text style={styles.logintext}>Forgot Password</Text>

          <View style={styles.logininputbox}>
            {this.state.showError == true ? (
              <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                Enter Mobile number
              </Text>
            ) : null}
            <TextInput
              style={[styles.input, styles.inputmargin, {marginTop: 50}]}
              ref={this.input1}
              keyboardType={'number-pad'}
              maxLength={10}
              placeholder="Enter mobile number"
              placeholderTextColor={'#707070'}
              onChangeText={data => {
                const filteredText = data.replace(/[^0-9]/g, '');
                this.setState({
                  email: filteredText,
                  showError: false,
                });
              }}
              // onBlur={() => {
              //   if (this.state.showError == true) {
              //     if (this.state.email == '') {
              //       Alert.alert('','Enter Email/Mobile number');
              //       this.input1.current.focus();
              //     }
              //   }
              //   // this.state.showError == true
              //   //   ? this.state.f_name == ''
              //   //     ? Alert.alert('','Enter firstname')
              //   //     : null
              //   //   : null;
              // }}
              value={this.state.email}
              // onChangeText={setUserName}
              //value={userName}
            />

            <View style={{alignSelf: 'center'}}>
              <Text
                style={[
                  styles.accounttext,
                  {marginTop: 10, fontSize: 14, color: '#000'},
                ]}>
                We will send you One Time Code
              </Text>
              <Text
                style={[
                  styles.accounttext,
                  {marginTop: 3, fontSize: 14, color: '#000'},
                ]}>
                on your mobile number
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.loginbutton, {marginTop: 80}]}
              onPress={() => {
                if (this.state.email == '') {
                  Alert.alert('', 'Enter mobile number');
                } else {
                  if (this.state.email.match(/^[789]\d{9}$/) === null) {
                    Alert.alert('', 'Enter Valid Mobile number');
                  } else {
                    const param = {
                      partnerType: 'admin',
                      userName: this.state.email,
                      userType: '6',
                    };
                    console.log('param', param);

                    axios
                      .post(`${userBaseUrl}/user/noAuth/forgetPswd`, param)
                      .then(Response => {
                        console.log('Response', Response.data);
                        let demo = Response.data.data;
                        console.log('Responsedemo', demo);
                        if (Response.data.statusCode == '200') {
                          this.props.navigation.navigate(
                            'ForgotPasswordOtpScreen',
                            {
                              email: this.state.email,
                              user_id: demo,
                            },
                          );
                        } else {
                          alert(Response.data.statusMessage);
                        }
                      });
                  }
                }
              }}>
              <Text style={styles.loginbuttontext}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ForgotPasswordMobileNumber;

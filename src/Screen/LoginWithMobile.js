import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './Auth/LoginScreen/loginstyle';
import {useNavigation} from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import React, {Component} from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import qs from 'qs';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwOTk1IiwiYXV0aCI6InBhcnRuZXIiLCJpZCI6MjM1MSwiaWF0IjoxNjc1MTg1NDE5fQ.oKpjXbeFucVEZQjHLTkmQeSthPukNulgUzj9zpGJlqo';

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export class LoginWithMobile extends Component {
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

  _validation() {
    if (this.state.email == '') {
      alert('Enter email');
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
    ) {
      alert('Enter valid email');
    } else if (this.state.password == '') {
      alert('Enter password');
    } else if (!passwordPattern.test(this.state.password)) {
      alert(
        `Your password must have :\n\n -Between 9-16 character,\n-1 Uppercase character,\n-1 Lowercase character,\n-1 Special character(~!@#$%^&*),\n-1 Number(0-9)`,
      );
    } else {
      this._api();
    }
  }

  _api() {
    var key = 'imavatar';
    var iv = 'mHGFxENnZLbienLyANoi.e';

    key = CryptoJS.enc.Base64.parse(key);

    iv = CryptoJS.enc.Base64.parse(iv);
    console.log('====================================');
    console.log('    value={this.state.password}', this.state.password);
    console.log('====================================');
    var demo = this.state.password;

    var local_pass = CryptoJS.AES.encrypt(demo, key, {
      iv: iv,
    }).toString();

    const param = {
      userName: this.state.email,
      password: local_pass,
      userType: '6',
    };

    console.log('====================================');
    console.log('param', param);
    console.log('====================================');

    axios
      .post('http://35.170.79.161:8080/api/user/noAuth/login', param, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(Response => {
        console.log('Response', Response.data.data);
        //alert(Response.data.status);
        var dem = Response.data.data;

        const headers = {
          Authorization: 'Bearer ' + Response.data.data,
          'Content-Type': 'application/json',
        };

        axios
          .post(
            'http://35.170.79.161:8080/api/user/auth/getUserInfoPartner/6',
            {},
            {
              headers,
            },
          )
          .then(Response => {
            console.log('====================================');
            console.log('Res', Response.data);
            console.log('====================================');
            this.props.navigation.navigate('Profile', {
              userid: Response.data.data.id,
              token: dem,
            });
          });
      });
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
          <Text style={styles.logintext}>Login With OTP</Text>
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
              onBlur={() => {
                if (this.state.showError == true) {
                  if (this.state.email == '') {
                    alert('Enter Email/Mobile number');
                    // this.input1.current.focus();
                  }
                }
                // this.state.showError == true
                //   ? this.state.f_name == ''
                //     ? alert('Enter firstname')
                //     : null
                //   : null;
              }}
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
                  alert('Enter mobile number');
                } else {
                  if (this.state.email == '') {
                    alert('Enter Email/Mobile number');
                  } else {
                    const param = {
                      partnerType: 'admin',
                      userName: this.state.email,
                      userType: '6',
                    };
                    console.log('====================================');
                    console.log('param', param);
                    console.log('====================================');
                    //http://35.170.79.161:8080/api/user/noAuth/sendOTPForLogin
                    axios
                      .post(
                        'http://35.170.79.161:8080/api/user/MP/noAuth/sendOTP/login',
                        param,
                      )
                      .then(Response => {
                        console.log('Response', Response.data);
                        if (Response.data.statusCode == '200') {
                          this.props.navigation.navigate(
                            'MobileLoginOTPVerificationScreen',
                            {
                              email: this.state.email,
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

export default LoginWithMobile;

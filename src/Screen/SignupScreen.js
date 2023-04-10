import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './signupstyle';
import randombytes from 'react-native-randombytes';
import {toastConfig} from '../../style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import qs from 'qs';
// import {
//   useRegisterUserMutation,
//   useSendOTPUserMutation,
// } from '../Store/Services/userAuthApi';
import Toast from 'react-native-toast-message';
import CryptoJS from 'crypto-js';
// import key from "../../../../secretKey";

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwOTk1IiwiYXV0aCI6InBhcnRuZXIiLCJpZCI6MjM1MSwiaWF0IjoxNjc1MTg1NDE5fQ.oKpjXbeFucVEZQjHLTkmQeSthPukNulgUzj9zpGJlqo';

const myEvents = [
  {
    id: 1,
    description: 'Event',
    startDate: new Date(2021, 3, 15, 12, 0),
    endDate: new Date(2021, 3, 15, 12, 30),
    color: 'blue',
    // ... more properties if needed,
  },
  // More events...
];

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,16}$/;

export class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: 'Test',
      l_name: 'Test',
      email: `test+${(Math.random() * 100).toFixed()}@gmail.com`,
      mobile: `97989898${(Math.random() * 100).toFixed()}`,
      password: 'Testing@123',
      confirm_password: 'Testing@123',
      // f_name: '',
      // l_name: '',
      // email: "",
      // mobile: "",
      // password: '',
      // confirm_password: '',
      pass_visible: '',
      pass_visible_c: '',
      showError: false,
      showError1: false,
      showError2: false,
      showError3: false,
      showError4: false,
      showError5: false,
    };

    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.input5 = React.createRef();
    this.input6 = React.createRef();
  }

  _validation() {
    if (this.state.f_name == '') {
      alert('Enter First Name');
    } else if (this.state.l_name == '') {
      alert('Enter Last Name');
    } else if (this.state.email == '') {
      alert('Enter Email');
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
    ) {
      alert('Enter valid email');
    } else if (this.state.mobile == '') {
      alert('Enter mobile number');
    } else if (this.state.mobile.length != 10) {
      console.log(
        '🚀 ~ file: SignupScreen.js:85 ~ SignupScreen ~ _validation ~ this.state.mobile.length:',
        this.state.mobile,
        this.state.mobile.length,
      );
      alert('Enter 10 digit moible number ');
    } else if (this.state.mobile.match(/^[789]\d{9}$/) === null) {
      alert('Enter 10 digit moible number ');
    } else if (this.state.password == '') {
      alert('Enter Password');
    } else if (!passwordPattern.test(this.state.password)) {
      alert(
        `Your password must have :\n\n -Between 9-16 character,\n-1 Uppercase character,\n-1 Lowercase character,\n-1 Special character(~!@#$%^&*),\n-1 Number(0-9)`,
      );
    } else if (this.state.confirm_password == '') {
      alert('Enter confirm password');
    } else if (this.state.password != this.state.confirm_password) {
      alert('Password and confirm password do not match');
    } else {
      this._api();
    }
  }

  _api() {
    //key = CryptoJS.enc.Base64.parse(key);

    //  iv = CryptoJS.enc.Base64.parse(iv);

    var local_pass = this.state.password;

    const param = {
      active: 'true',
      email: this.state.email,
      emailVerified: false,
      firstName: this.state.f_name,
      lastName: this.state.l_name,

      password: local_pass,
      phoneVerified: 'false',
      phoneNumber: this.state.mobile,
      userType: 'partner',
    };

    console.log('====================================');
    console.log('param', param);
    console.log('====================================');

    const headers = {
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwNTM1IiwiYXV0aCI6ImFkbWluIiwiaWQiOjI0MTMsImlhdCI6MTY3NjkwNDc0NH0.BNVFViuxgwtXH5du_L4vvjM8gfF6pmMO9xG2mb4yLII',
      'Content-Type': 'application/json',
    };

    axios
      .post('http://52.90.60.5:8080/api/user/noAuth/addUser', param, {
        headers,
      })
      .then(Response => {
        console.log(
          '🚀 ~ file: SignupScreen.js:160 ~ SignupScreen ~ _api ~ Response:',
          Response,
        );
        if (Response.data.statusCode == '200') {
          this.props.navigation.navigate('MobileOTPVerificationScreen', {
            mobile_numer: this.state.mobile,
            email: this.state.email,
            userid: Response.data.data.id,
            local_pass: local_pass,
          });
        } else {
          alert(Response.data.statusMessage);
        }
        //  alert(Response.data.status);
      })
      .catch(error => {
        alert('User already exists.');
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Toast config={toastConfig} />
          <View style={styles.signupbox}>
            <View style={styles.logo}>
              <Image source={require('./assets/Icons/logo.png')} />
              <Text style={styles.logotext}>imavatar</Text>
            </View>

            <Text style={styles.signuptext}>Welcome to ImAvatar</Text>

            <View style={styles.signupinputbox}>
              {this.state.showError == true ? (
                <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                  Enter First Name
                </Text>
              ) : null}

              <TextInput
                placeholderTextColor={'#707070'}
                style={[styles.input, styles.inputmargin]}
                placeholder="First Name*"
                onFocus={() => {
                  this.setState({
                    showError: true,
                  });
                }}
                ref={this.input1}
                onBlur={() => {
                  if (this.state.showError == true) {
                    if (this.state.f_name == '') {
                      alert('Enter First Name');
                      // this.input1.current.focus();
                    }
                  }
                  // this.state.showError == true
                  //   ? this.state.f_name == ''
                  //     ? alert('Enter firstname')
                  //     : null
                  //   : null;
                }}
                onChangeText={data => {
                  const filteredText = data.replace(/[^a-zA-Z]/g, '');
                  this.setState({
                    f_name: filteredText,
                    showError: false,
                  });
                }}
                value={this.state.f_name}
              />

              {this.state.showError1 == true ? (
                <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                  Enter Last Name
                </Text>
              ) : null}
              <TextInput
                placeholderTextColor={'#707070'}
                style={[styles.input, styles.inputmargin]}
                placeholder="Last Name*"
                onFocus={() => {
                  if (this.state.f_name == '') {
                    // this.input1.current.focus();
                  } else {
                    this.setState({
                      showError1: true,
                    });
                  }
                }}
                ref={this.input2}
                onBlur={() => {
                  if (this.state.showError1 == true) {
                    if (this.state.l_name == '') {
                      alert('Enter lastname');
                      // this.input2.current.focus();
                    }
                  }
                  // this.state.showError1 == true
                  //   ? this.state.l_name == ''
                  //     ? alert('Enter lastname')
                  //     : null
                  //   : null;
                }}
                onChangeText={data => {
                  const filteredText = data.replace(/[^a-zA-Z]/g, '');
                  this.setState({
                    l_name: filteredText,
                    showError1: false,
                  });
                }}
                value={this.state.l_name}
              />

              {this.state.showError2 == true ? (
                <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                  Enter Valid Email
                </Text>
              ) : null}
              <TextInput
                placeholderTextColor={'#707070'}
                style={[styles.input, styles.inputmargin]}
                placeholder="Email*"
                onFocus={() => {
                  if (this.state.l_name == '') {
                    //alert('Enter lastname first');
                    // this.input2.current.focus();
                  } else {
                    this.setState({
                      showError2: true,
                    });
                  }
                }}
                ref={this.input3}
                onBlur={() => {
                  if (this.state.showError2 == true) {
                    if (this.state.email == '') {
                      alert('Enter email');
                      // this.input3.current.focus();
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        this.state.email,
                      )
                    ) {
                      alert('Enter valid email');
                    }
                  }
                  // this.state.showError2 == true
                  //   ? this.state.email == ''
                  //     ? alert('Enter email')
                  //     : null
                  //   : null;
                }}
                onChangeText={data => {
                  this.setState({
                    email: data,
                    showError2: false,
                  });
                }}
                value={this.state.email}
              />
              {this.state.showError3 == true ? (
                <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                  Enter 10 Digit Mobile Number
                </Text>
              ) : null}
              <TextInput
                placeholderTextColor={'#707070'}
                style={[styles.input, styles.inputmargin]}
                placeholder="Mobile Number*"
                onFocus={() => {
                  if (this.state.email == '') {
                    // this.input3.current.focus();
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      this.state.email,
                    )
                  ) {
                    // this.input3.current.focus();
                  } else {
                    this.setState({
                      showError3: true,
                    });
                  }
                }}
                ref={this.input4}
                // onBlur={() => {
                //   if (this.state.showError3 == true) {
                //     if (this.state.mobile == '') {
                //       alert('Enter mobile number');
                //       // this.input4.current.focus();
                //     }
                //   }
                //   // this.state.showError3 == true
                //   //   ? this.state.mobile == ''
                //   //     ? alert('Enter mobile number')
                //   //     : null
                //   //   : null;
                // }}
                onChangeText={data => {
                  const filteredText = data.replace(/[^0-9]/g, '');

                  this.setState({
                    mobile: filteredText,
                    showError3: false,
                  });
                }}
                value={this.state.mobile}
                keyboardType={'number-pad'}
                maxLength={10}
              />

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  {this.state.showError4 == true ? (
                    <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                      Enter password
                    </Text>
                  ) : null}

                  <TextInput
                    placeholderTextColor={'#707070'}
                    style={[styles.input, styles.inputmargin]}
                    placeholder="Password*"
                    // onChangeText={setPassword}
                    // value={password}
                    ref={this.input5}
                    onFocus={() => {
                      if (this.state.mobile == '') {
                        //alert('Enter mobile number first');
                        // this.input4.current.focus();
                      } else if (this.state.mobile.length != 10) {
                        //alert('Enter mobile number first');
                        // this.input4.current.focus();
                      } else {
                        this.setState({
                          showError4: true,
                        });
                      }
                    }}
                    onBlur={() => {
                      if (this.state.showError4 == true) {
                        if (this.state.password == '') {
                          alert('Enter password');
                          // this.input5.current.focus();
                        }
                      }
                      // this.state.showError4 == true
                      //   ? this.state.password == ''
                      //     ? alert('Enter password')
                      //     : null
                      //   : null;
                    }}
                    onChangeText={data => {
                      this.setState({
                        password: data,
                        showError4: false,
                      });
                    }}
                    secureTextEntry={!this.state.pass_visible}
                    value={this.state.password}
                  />
                </View>

                <View style={{flex: 0.1}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.state.pass_visible == true
                        ? this.setState({
                            pass_visible: false,
                          })
                        : this.setState({
                            pass_visible: true,
                          });
                    }}>
                    <Image
                      source={
                        this.state.pass_visible == false
                          ? require('../assets/open_eye.png')
                          : require('../assets/close_eye.png')
                      }
                      style={{
                        height: 20,
                        width: 20,
                        marginTop: 15,
                        marginLeft: 2,
                      }}
                      resizeMode={'contain'}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  {this.state.showError5 == true ? (
                    <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                      Enter confirm password
                    </Text>
                  ) : null}

                  <TextInput
                    placeholderTextColor={'#707070'}
                    style={styles.input}
                    placeholder="Confirm Password*"
                    secureTextEntry={!this.state.pass_visible_c}
                    onFocus={() => {
                      if (this.state.password == '') {
                        alert('Enter password first');
                        // this.input5.current.focus();
                      } else {
                        this.setState({
                          showError5: true,
                        });
                      }
                    }}
                    ref={this.input6}
                    onBlur={() => {
                      if (this.state.showError5 == true) {
                        if (this.state.confirm_password == '') {
                          alert('Enter confirm password');
                          // this.input6.current.focus();
                        }
                      }
                      // this.state.showError5 == true
                      //   ? this.state.confirm_password == ''
                      //     ? alert('Enter confirm password')
                      //     : null
                      //   : null;
                    }}
                    onChangeText={data => {
                      this.setState({
                        confirm_password: data,
                        showError5: false,
                      });
                    }}
                    value={this.state.confirm_password}
                  />
                </View>
                <View style={{flex: 0.1}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.state.pass_visible_c == true
                        ? this.setState({
                            pass_visible_c: false,
                          })
                        : this.setState({
                            pass_visible_c: true,
                          });
                    }}>
                    <Image
                      source={
                        this.state.pass_visible_c == false
                          ? require('../assets/open_eye.png')
                          : require('../assets/close_eye.png')
                      }
                      style={{
                        height: 20,
                        width: 20,
                        marginTop: 15,
                        marginLeft: 2,
                      }}
                      resizeMode={'contain'}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.signupbutton}
                onPress={() => {
                  this._validation();
                }}>
                <Text style={styles.signupbuttontext}>SIGN UP</Text>
              </TouchableOpacity>
              <Text style={styles.ortext}>OR</Text>
              <View style={styles.accounttextbox}>
                <Text style={styles.accounttext}>
                  Already have an account?{' '}
                </Text>
                <Pressable
                  onPress={() => this.props.navigation.navigate('LoginScreen')}>
                  <Text style={styles.accounttextinnner}>Login</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignupScreen;

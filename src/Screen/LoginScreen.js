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
import {addLoginToken, addUserId} from '../reducers/UserReducer/user_actions';
import Toast from 'react-native-toast-message';
import React, {Component} from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import qs from 'qs';
import {connect} from 'react-redux';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwOTk1IiwiYXV0aCI6InBhcnRuZXIiLCJpZCI6MjM1MSwiaWF0IjoxNjc1MTg1NDE5fQ.oKpjXbeFucVEZQjHLTkmQeSthPukNulgUzj9zpGJlqo';

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export class LoginScreen extends Component {
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
    //var key = 'imavatar';
    var key = 'imavatar';
    var iv = 'mHGFxENnZLbienLyANoi.e';
    key = CryptoJS.enc.Base64.parse(key);

    iv = CryptoJS.enc.Base64.parse(iv);
    console.log('====================================');
    console.log('    value={this.state.password}', this.state.password);
    console.log('====================================');
    var demo = this.state.password;

    var local_pass = demo;

    const param = {
      userName: this.state.email,
      password: local_pass,
      userType: '6',
    };

    console.log('====================================');
    console.log('param', param);
    console.log('====================================');

    axios
      .post('http://35.170.79.161:8080/api/user/MP/noAuth/login', param, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(Response => {
        if (Response.data.statusCode == '200') {
          if (
            Response.data.data.isPhoneVerified == true ||
            Response.data.data.isEmailVerified == true
          ) {
            console.log('Response', Response.data);
            console.log('Response', Response.data.data.token);
            //alert(Response.data.status);
            var dem = Response.data.data.token;
            this.props.addLoginToken(dem);

            const headers = {
              Authorization: 'Bearer ' + Response.data.data.token,
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
                this.props.addUserId(Response.data.data.id);
                this.props.navigation.navigate('Profile', {
                  userid: Response.data.data.id,
                  token: dem,
                });
              });
          } else if (
            Response.data.data.isPhoneVerified == false ||
            Response.data.data.isEmailVerified == false
          ) {
            console.log('Response both', Response.data);
            //alert(Response.data.status);
            var dem = Response.data.data.token;
            this.props.addLoginToken(dem);

            const headers = {
              Authorization: 'Bearer ' + Response.data.data.token,
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
              .then(Response1 => {
                console.log('====================================');
                console.log('Res123', Response1.data);
                console.log('====================================');
                this.props.addUserId(Response1.data.data.id);
                this.props.navigation.navigate('MobileOTPVerificationScreen', {
                  // userid: Response.data.data.id,
                  // token: dem,
                  mobile_numer: Response1.data.data.phoneNumber,
                  email: Response1.data.data.emailId,
                  userid: Response1.data.data.id,
                  local_pass: local_pass,
                });
              });
          } else if (
            Response.data.data.isPhoneVerified == true ||
            Response.data.data.isEmailVerified == false
          ) {
            console.log('Response both', Response.data);
            //alert(Response.data.status);
            var dem = Response.data.data.token;
            this.props.addLoginToken(dem);

            const headers = {
              Authorization: 'Bearer ' + Response.data.data.token,
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
              .then(Response1 => {
                console.log('====================================');
                console.log('Res123', Response1.data);
                console.log('====================================');
                this.props.addUserId(Response1.data.data.id);
                // this.props.navigation.navigate('MobileOTPVerificationScreen', {
                //   // userid: Response.data.data.id,
                //   // token: dem,
                //   mobile_numer: Response1.data.data.phoneNumber,
                //   email: Response1.data.data.emailId,
                //   userid: Response1.data.data.id,
                //   local_pass: local_pass,
                // });

                this.props.navigation.navigate('EmailOTPVerificationScreen', {
                  email: Response1.data.data.emailId,
                  userid: Response1.data.data.id,
                  local_pass: local_pass,
                });
              });
          } else {
            alert(Response.data.statusMessage);
          }
        } else {
          alert(Response.data.statusMessage);
        }
      })
      .catch(error => {
        alert('Something went wrong !');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.crossiconbox}>
          <Image
            style={styles.crossicon}
            source={require('./assets/Icons/cross-icon.png')}
          />
        </View> */}

        <View style={styles.loginbox}>
          <View style={styles.logo}>
            <Image source={require('./assets/Icons/logo.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>

          <Text style={styles.logintext}>Login/Signup</Text>

          <View style={styles.logininputbox}>
            {this.state.showError == true ? (
              <Text style={{color: 'red', marginLeft: 10, fontSize: 10}}>
                Enter Email/Mobile number
              </Text>
            ) : null}
            <TextInput
              style={[styles.input, styles.inputmargin]}
              ref={this.input1}
              placeholder="Enter Email/Mobile number"
              onChangeText={data => {
                this.setState({
                  email: data,
                  showError: false,
                });
              }}
              onBlur={() => {
                if (this.state.showError == true) {
                  if (this.state.email == '') {
                    alert('Enter Email/Mobile number');
                    this.input1.current.focus();
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

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <TextInput
                  onFocus={() => {
                    if (this.state.email == '') {
                      this.input1.current.focus();
                      this.setState({
                        showError: true,
                      });
                    } else {
                      this.setState({
                        showError1: true,
                      });
                    }
                  }}
                  style={styles.input}
                  ref={this.input2}
                  placeholder="Enter Password"
                  onChangeText={data => {
                    this.setState({
                      password: data,
                    });
                  }}
                  value={this.state.password}
                  secureTextEntry={!this.state.pass_visible}
                  // onChangeText={setPassword}
                  //value={password}
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
                      this.state.pass_visible == true
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
            {/* onPress={() => {
                this.props.navigation.navigate('ForgotPassword');
              }} */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgotPasswordMobileNumber');
              }}>
              <Text style={styles.Passwordtext}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginbutton}
              onPress={() => {
                this._validation();
              }}>
              <Text style={styles.loginbuttontext}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.ortext}>OR</Text>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LoginWithMobile');

                // if (this.state.email == '') {
                //   alert('Enter Email/Mobile number');
                // } else {
                //   const param = {
                //     partnerType: 'admin',
                //     userName: this.state.email,
                //     userType: '6',
                //   };
                //   console.log('====================================');
                //   console.log('param', param);
                //   console.log('====================================');
                //   //http://35.170.79.161:8080/api/user/noAuth/sendOTPForLogin
                //   axios
                //     .post(
                //       'http://35.170.79.161:8080/api/user/MP/noAuth/sendOTP/login',
                //       param,
                //     )
                //     .then(Response => {
                //       console.log('Response', Response.data);
                //       if (Response.data.statusCode == '200') {
                //         this.props.navigation.navigate(
                //           'MobileLoginOTPVerificationScreen',
                //           {
                //             email: this.state.email,
                //           },
                //         );
                //       }
                //     });
                // }
              }}>
              <Text style={styles.otptext}>Login with OTP</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={styles.accounttext}>New to ImAvatar? </Text>

              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Text style={styles.accounttextinnner}>Create an account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  login_tokenn: state.userDetails.login_token,
});

const mapDispatchToProps = {
  addLoginToken,
  addUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

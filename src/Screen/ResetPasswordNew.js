import axios from 'axios';
import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/ResetPassword/resetpasswordstyle';
import CryptoJS from 'crypto-js';
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export class ResetPasswordNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirm_password: '',
      showError: false,
      pass_visible: '',
      pass_visible_c: '',
    };
    this.input1 = React.createRef();
    this.input2 = React.createRef();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.crossiconbox}>
          <Image
            style={styles.crossicon}
            source={require('../assets/Icons/cross-icon.png')}
          />
        </View> */}

        <Image
          style={styles.imagebackground}
          source={require('../assets/Images/Imavatar_flower.png')}
        />

        <View style={styles.verificationbox}>
          <View style={styles.logo}>
            <Image source={require('../assets/Icons/logo.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>

          <Text style={styles.resetpasstext}>Reset Your Password</Text>
          {this.state.showError == true ? (
            <Text style={{ color: 'red', marginLeft: 10, fontSize: 10 }}>
              Enter Password
            </Text>
          ) : null}

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={[styles.input, styles.inputmargin]}
                placeholder="Enter new password Eg. Testing@1"
                ref={this.input1}
                secureTextEntry={!this.state.pass_visible}
                onChangeText={data => {
                  this.setState({
                    password: data,
                    showError: false,
                  });
                }}
                onBlur={() => {
                  if (this.state.showError == true) {
                    if (this.state.password == '') {
                      alert('Enter password');
                      this.input1.current.focus();
                    }
                  }
                }}
                value={this.state.password}
                placeholderTextColor='#999'
              />
            </View>

            <View style={{ flex: 0.1 }}>
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

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TextInput
                onFocus={() => {
                  if (this.state.password == '') {
                    this.input1.current.focus();
                    this.setState({
                      showError: true,
                    });
                  }
                }}
                secureTextEntry={!this.state.pass_visible_c}
                onChangeText={data => {
                  this.setState({
                    confirm_password: data,
                    showError: false,
                  });
                }}
                value={this.state.confirm_password}
                style={styles.input}
                placeholder="Enter confirm password Eg. Testing@1*"
                ref={this.input2}
                placeholderTextColor='#999'
              />
            </View>

            <View style={{ flex: 0.1 }}>
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
            onPress={() => {
              if (this.state.password == '') {
                alert('Enter password');
              } else if (!passwordPattern.test(this.state.password)) {
                alert(
                  `Your password must have :\n\n -Between 9-16 character,\n-1 Uppercase character,\n-1 Lowercase character,\n-1 Special character(~!@#$%^&*),\n-1 Number(0-9)`,
                );
              } else if (this.state.confirm_password == '') {
                alert('Enter confirm password');
              } else if (!passwordPattern.test(this.state.confirm_password)) {
                alert(
                  `Your password must have :\n\n -Between 9-16 character,\n-1 Uppercase character,\n-1 Lowercase character,\n-1 Special character(~!@#$%^&*),\n-1 Number(0-9)`,
                );
              } else if (this.state.password != this.state.confirm_password) {
                alert('Password and confirm password do not match');
              } else {
                var key = 'imavatar';
                var iv = 'mHGFxENnZLbienLyANoi.e';

                key = CryptoJS.enc.Base64.parse(key);

                iv = CryptoJS.enc.Base64.parse(iv);

                var local_pass = this.state.password;

                const param = {
                  email: this.props.route.params.email,
                  password: local_pass,
                  userId: this.props.route.params.user_id,
                };

                console.log('params', param);
                axios
                  .post(
                    'http://35.170.79.161:8080/api/user/noAuth/changePassword',
                    param,
                  )
                  .then(Response => {
                    console.log('Response', Response.data.statusCode);
                    if (Response.data.statusCode == '200') {
                      this.props.navigation.replace('LoginScreen');
                    } else {
                      alert(Response.data.status);
                    }
                  });
              }
            }}
            style={styles.confirmbutton}>
            <Text style={styles.confirmbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ResetPasswordNew;

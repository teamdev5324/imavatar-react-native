import {textAlign} from '@mui/system';
import axios from 'axios';
import React, {Component} from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import styles from '../Screen/Auth/MobileOTPVerificationScreen/mobileotpverificationstyle';

export class MobileOTPVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_number: this.props.route.params.mobile_numer,
      user_id: this.props.route.params.userid,
      timeLeft: 60,
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
    };

    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.interval);
    console.log(
      'this.props.route.params.local_pass',
      this.props.route.params.local_pass,
    );
  }
  componentDidMount() {
    console.log(
      'this.props.route.params.local_pass',
      this.props.route.params.local_pass,
    );
    const param = {
      partnerType: 'admin',
      userName: this.state.mobile_number,
      userType: '6',
    };
    console.log('====================================');
    console.log('param', param);
    console.log('====================================');
    //http://52.90.60.5:8080/api/user/noAuth/sendOTPForLogin
    axios
      .post(
        'http://52.90.60.5:8080/api/user/MP/noAuth/sendOTP/phoneVerification',
        param,
      )
      .then(Response => {
        console.log('Response', Response.data);
        if (Response.data.statusCode == '200') {
        }
      });

    this.interval = BackgroundTimer.setInterval(() => {
      if (this.state.timeLeft == 0) {
        this.setState({
          otp1: '',
          otp2: '',
          otp3: '',
          otp4: '',
        });
      } else {
        this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}));
        console.log('timeLeft', this.state.timeLeft);
      }
    }, 1000);
  }

  _resendOtp() {
    const param = {
      partnerType: 'admin',
      userName: this.state.mobile_number,
      userType: '6',
    };
    console.log('====================================');
    console.log('param', param);
    console.log('====================================');
    axios
      .post(
        'http://52.90.60.5:8080/api/user/MP/noAuth/sendOTP/phoneVerification',
        param,
      )
      .then(Response => {
        console.log('Response', Response.data);
        this.setState({
          timeLeft: 60,
        });
      });
  }

  _validateOtp() {
    if (
      this.state.otp1 == '' ||
      this.state.otp2 == '' ||
      this.state.otp3 == '' ||
      this.state.otp4 == ''
    ) {
      alert('Please enter OTP');
    } else {
      var otp =
        this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4;
      axios
        .get(
          `http://52.90.60.5:8080/api/user/userVerification/phone/${otp}/${this.state.user_id}`,
        )
        .then(Response => {
          if (Response.data.statusCode == '200') {
            const param = {
              user_id: this.props.route.params.userid,
              emailVerified: 'false',
              phoneVerified: 'true',
            };

            console.log('====================================');
            console.log('param', param);
            console.log('====================================');

            axios
              .post(
                'http://52.90.60.5:8080/api/user/v2/noAuth/updateUser',
                param,
              )
              .then(Response => {
                console.log('Response.data', Response.data);
                //if (Response.data.statusCode == '200') {
                this.props.navigation.navigate('MobileOTPVerifiedScreen', {
                  email: this.props.route.params.email,
                  userid: this.props.route.params.userid,
                  local_pass: this.props.route.params.local_pass,
                });
                // } else {
                //   alert(Response.data.statusMessage);
                // }
              });
          } else {
            alert(Response.data.statusMessage);
          }
          console.log('Response', Response.data);
          //this.props.navigation.navigate('MobileOTPVerifiedScreen');
        });
    }
  }

  render() {
    const {timeLeft} = this.state;
    const seconds = timeLeft < 10 ? `0${timeLeft}` : timeLeft;

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

          <Text style={styles.verificationtext}>
            Mobile Number Verification
          </Text>

          <View style={styles.verificationtextbox}>
            <Text style={styles.veritext}>
              Enter OTP sent to +91 {this.state.mobile_number}{' '}
            </Text>
            <Pressable
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Text style={styles.veritextinnner}> Change</Text>
            </Pressable>
          </View>

          <View style={styles.otpinputbox}>
            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              keyboardType={'number-pad'}
              maxLength={1}
              editable={this.state.timeLeft == 0 ? false : true}
              onChangeText={data => {
                this.setState({
                  otp1: data,
                });
                this.input2.current.focus();
              }}
              ref={this.input1}
            />

            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              keyboardType={'number-pad'}
              maxLength={1}
              editable={this.state.timeLeft == 0 ? false : true}
              onChangeText={data => {
                this.setState({
                  otp2: data,
                });
                this.input3.current.focus();
              }}
              ref={this.input2}
            />

            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              keyboardType={'number-pad'}
              maxLength={1}
              editable={this.state.timeLeft == 0 ? false : true}
              onChangeText={data => {
                this.setState({
                  otp3: data,
                });
                this.input4.current.focus();
              }}
              ref={this.input3}
            />

            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              keyboardType={'number-pad'}
              maxLength={1}
              editable={this.state.timeLeft == 0 ? false : true}
              onChangeText={data => {
                this.setState({
                  otp4: data,
                });
              }}
              ref={this.input4}
            />
          </View>

          <Text>Code expires in 00:{seconds}</Text>

          <TouchableOpacity
            onPress={() => {
              if (this.state.timeLeft == 0) {
                this._resendOtp();
              } else {
                alert('Otp sent on above mobile number please wait.');
              }
            }}>
            <Text
              style={[
                styles.otprequest,
                {color: this.state.timeLeft == 0 ? '#FF6557' : '#000'},
              ]}>
              Resend OTP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupbutton}
            onPress={() => {
              this._validateOtp();
              //this.props.navigation.navigate('MobileOTPVerifiedScreen');
            }}>
            <Text style={styles.signupbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MobileOTPVerificationScreen;

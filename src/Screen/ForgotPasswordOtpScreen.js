import {TextInput, Text, View, Image, Pressable} from 'react-native';
import React, {Component} from 'react';
import styles from '../Screen/Auth/MobileLoginOTPVerificationScreen/mobileloginotpverificationstyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import BackgroundTimer from 'react-native-background-timer';

export class ForgotPasswordOtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      timeLeft: 60,
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
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagebackground}
          source={require('./assets/Images/Imavatar_flower.png')}
        />

        <View style={styles.verificationbox}>
          <View style={styles.logo}>
            <Image source={require('./assets/Icons/logo.png')} />
            <Text style={styles.logotext}>imavatar</Text>
          </View>

          <Text style={styles.verificationtext}>Forgot Password</Text>

          <View style={styles.verificationtextbox}>
            <Text style={styles.veritext}>
              Enter OTP sent to +91 {' ' + this.props.route.params.email}
            </Text>
          </View>

          <View style={styles.otpinputbox}>
            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              textAlign={'center'}
              maxLength={1}
              editable={this.state.timeLeft == 0 ? false : true}
              keyboardType={'number-pad'}
              ref={this.input1}
              onChangeText={data => {
                this.setState({
                  otp1: data,
                });
                this.input2.current.focus();
              }}
              value={this.state.otp1}
              // onChangeText={setfirstValue}
              // value={firstvalue}
            />

            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              textAlign={'center'}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={this.input2}
              onChangeText={data => {
                this.setState({
                  otp2: data,
                });
                this.input3.current.focus();
              }}
              editable={this.state.timeLeft == 0 ? false : true}
              value={this.state.otp2}
              // onChangeText={setsecondValue}
              // value={secondvalue}
            />

            <TextInput
              style={[
                styles.input,
                styles.inputmarginright,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              editable={this.state.timeLeft == 0 ? false : true}
              maxLength={1}
              keyboardType={'number-pad'}
              textAlign={'center'}
              ref={this.input3}
              onChangeText={data => {
                this.setState({
                  otp3: data,
                });
                this.input4.current.focus();
              }}
              value={this.state.otp3}
              // onChangeText={setthirdValue}
              // value={thirdvalue}
            />

            <TextInput
              style={[
                styles.input,
                {backgroundColor: this.state.timeLeft == 0 ? 'gray' : null},
              ]}
              editable={this.state.timeLeft == 0 ? false : true}
              maxLength={1}
              keyboardType={'number-pad'}
              textAlign={'center'}
              ref={this.input4}
              onChangeText={data => {
                this.setState({
                  otp4: data,
                });
              }}
              value={this.state.otp4}
              // onChangeText={setfourthValue}
              // value={fourthvalue}
            />
          </View>

          <Text>
            Code expires in 00:
            {this.state.timeLeft > 9
              ? this.state.timeLeft
              : `0${this.state.timeLeft}`}
          </Text>

          <TouchableOpacity
            onPress={() => {
              if (this.state.timeLeft == 0) {
                const param = {
                  partnerType: 'admin',
                  userName: this.props.route.params.email,
                  userType: '6',
                };
                console.log('====================================');
                console.log('param', param);
                console.log('====================================');
                //http://52.90.60.5:8080/api/user/noAuth/sendOTPForLogin
                axios
                  .post(
                    'http://52.90.60.5:8080/api/user/noAuth/forgetPswd',
                    param,
                  )
                  .then(Response => {
                    console.log('Response', Response.data);
                    this.setState({
                      timeLeft: 60,
                    });
                    alert(
                      'OTP sent successfully on ' +
                        this.props.route.params.email,
                    );
                  });
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
            onPress={() => {
              if (this.state.otp1 == '') {
                alert('Enter OTP');
              } else if (this.state.otp2 == '') {
                alert('Enter OTP');
              } else if (this.state.otp3 == '') {
                alert('Enter OTP');
              } else if (this.state.otp4 == '') {
                alert('Enter OTP');
              } else {
                const param = {
                  otp:
                    this.state.otp1 +
                    this.state.otp2 +
                    this.state.otp3 +
                    this.state.otp4,
                  userName: this.props.route.params.email,
                  userType: '6',
                };

                var otp =
                  this.state.otp1 +
                  this.state.otp2 +
                  this.state.otp3 +
                  this.state.otp4;
                var user_id = this.props.route.params.user_id;
                console.log('====================================');
                console.log(
                  'param',
                  `http://52.90.60.5:8080/api/user/noAuth/verifyForgetPswdOTP/${otp}/${user_id}`,
                );
                console.log('====================================');
                //http://52.90.60.5:8080/api/user/noAuth/sendOTPForLogin
                axios
                  .get(
                    `http://52.90.60.5:8080/api/user/noAuth/verifyForgetPswdOTP/${otp}/${user_id}`,
                    param,
                  )
                  .then(Response => {
                    console.log('Response', Response.data);
                    if (Response.data.statusCode == '200') {
                      //this.props.navigation.navigate('MobileOTPVerifiedScreen');
                      this.props.navigation.navigate('ResetPasswordNew', {
                        email: this.props.route.params.email,
                        user_id: user_id,
                      });
                      console.log('Res', Response.data);
                    } else {
                      alert(Response.data.statusMessage);
                    }
                  })
                  .catch(error => {
                    console.log('====================================');
                    console.log('error', error);
                    console.log('====================================');
                    alert('Something went wrong ');
                  });
              }
            }}
            // onPress={handlePhoneOTPSubmit}
            style={styles.signupbutton}>
            <Text style={styles.signupbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ForgotPasswordOtpScreen;

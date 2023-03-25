import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/EmailOTPVerificationScreen/emailotpverificationstyle';
import axios from 'axios';
import BackgroundTimer from 'react-native-background-timer';
export class EmailOTPVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
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

  componentDidMount() {
    this._resendOtp();
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

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.interval);
    console.log(
      'this.props.route.params.local_pass',
      this.props.route.params.local_pass,
    );
  }

  _resendOtp() {
    const param = {
      partnerType: 'admin',
      userName: this.state.email,
      userType: '6',
    };
    console.log('====================================');
    console.log('param', param);
    console.log('====================================');
    axios
      .post(
        'http://35.170.79.161:8080/api/user/MP/noAuth/sendOTP/emailVerification',
        param,
      )
      .then(Response => {
        console.log('Response', Response.data);
        //  alert(Response.data.statusMessage);
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
      console.log(
        `http://35.170.79.161:8080/api/user/userVerification/email/${
          this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4
        }/${this.state.user_id}`,
      );

      var otp =
        this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4;
      axios
        .get(
          `http://35.170.79.161:8080/api/user/userVerification/email/${
            this.state.otp1 +
            this.state.otp2 +
            this.state.otp3 +
            this.state.otp4
          }/${this.state.user_id}`,
        )
        .then(Response => {
          if (Response.data.statusCode == '200') {
            const param = {
              user_id: this.props.route.params.userid,
              emailVerified: 'true',
              phoneVerified: 'true',
            };

            console.log('====================================');
            console.log('param', param);
            console.log('====================================');

            axios
              .post(
                'http://35.170.79.161:8080/api/user/v2/noAuth/updateUser',
                param,
              )
              .then(Response => {
                console.log('Response.data', Response.data);
                // if (Response.data.statusCode == '200') {
                // this.props.navigation.navigate('MobileOTPVerifiedScreen', {
                //   email: this.props.route.params.email,
                //   userid: this.props.route.params.userid,
                //   local_pass: this.props.route.params.local_pass,
                // });

                this.props.navigation.navigate('EmailOTPVerifiedScreen', {
                  user_id: this.props.route.params.userid,
                  local_pass: this.props.route.params.local_pass,
                  email: this.props.route.params.email,
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

          <Text style={styles.verificationtext}>Email Verification</Text>

          <View style={styles.verificationtextbox}>
            <Text style={styles.veritext}>
              Enter OTP sent to {this.state.email}
            </Text>
          </View>
          <Pressable>
            <Text style={styles.veritextinnner}> Change</Text>
          </Pressable>
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
              ref={this.input3}
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
            />

            <TextInput
              ref={this.input4}
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
            />
          </View>

          <Text>Code expires in 00:{seconds}</Text>

          <TouchableOpacity
            onPress={() => {
              if (this.state.timeLeft == 0) {
                this._resendOtp();
              } else {
                alert('Otp sent on above email please wait.');
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
              this._validateOtp();
            }}
            style={styles.signupbutton}>
            <Text style={styles.signupbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmailOTPVerificationScreen;

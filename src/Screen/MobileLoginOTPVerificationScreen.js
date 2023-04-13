import {TextInput, Text, View, Image, Pressable, Alert} from 'react-native';
import React, {Component} from 'react';
import styles from '../Screen/Auth/MobileLoginOTPVerificationScreen/mobileloginotpverificationstyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import BackgroundTimer from 'react-native-background-timer';

export class MobileLoginOTPVerificationScreen extends Component {
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

          <Text style={styles.verificationtext}>Login With OTP</Text>

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
              editable={this.state.timeLeft == 0 ? false : true}
              ref={this.input2}
              onChangeText={data => {
                this.setState({
                  otp2: data,
                });
                this.input3.current.focus();
              }}
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
              maxLength={1}
              keyboardType={'number-pad'}
              editable={this.state.timeLeft == 0 ? false : true}
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
              maxLength={1}
              keyboardType={'number-pad'}
              editable={this.state.timeLeft == 0 ? false : true}
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
                    'http://52.90.60.5:8080/api/user/MP/noAuth/sendOTP/login',
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
                    //alert(Response.data.statusMessage);
                  });
              } else {
                Alert.alert('', 'Otp sent on above mobile number please wait.');
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
                Alert.alert('', 'Enter OTP');
              } else if (this.state.otp2 == '') {
                Alert.alert('', 'Enter OTP');
              } else if (this.state.otp3 == '') {
                Alert.alert('', 'Enter OTP');
              } else if (this.state.otp4 == '') {
                Alert.alert('', 'Enter OTP');
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
                console.log('====================================');
                console.log('param', param);
                console.log('====================================');
                //http://52.90.60.5:8080/api/user/noAuth/sendOTPForLogin
                axios
                  .post(
                    'http://52.90.60.5:8080/api/user/MP/noAuth/loginByOTP',
                    param,
                  )
                  .then(Response => {
                    console.log('Response', Response.data);
                    if (Response.data.statusCode == '200') {
                      if (
                        Response.data.data.isPhoneVerified == true &&
                        Response.data.data.isEmailVerified == true
                      ) {
                        var dem = Response.data.data.token;

                        const headers = {
                          Authorization: 'Bearer ' + Response.data.data.token,
                          'Content-Type': 'application/json',
                        };

                        axios
                          .post(
                            'http://52.90.60.5:8080/api/user/auth/getUserInfoPartner/6',
                            {},
                            {
                              headers,
                            },
                          )
                          .then(Response => {
                            console.log('====================================');
                            console.log('Res', Response.data);
                            console.log('====================================');
                            this.props.navigation.replace('Dashboard', {
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
                            'http://52.90.60.5:8080/api/user/auth/getUserInfoPartner/6',
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
                            this.props.navigation.navigate(
                              'MobileOTPVerificationScreen',
                              {
                                // userid: Response.data.data.id,
                                // token: dem,
                                mobile_numer: Response1.data.data.phoneNumber,
                                email: Response1.data.data.emailId,
                                userid: Response1.data.data.id,
                                local_pass: local_pass,
                              },
                            );
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
                            'http://52.90.60.5:8080/api/user/auth/getUserInfoPartner/6',
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

                            this.props.navigation.navigate(
                              'EmailOTPVerificationScreen',
                              {
                                email: Response1.data.data.emailId,
                                userid: Response1.data.data.id,
                                local_pass: local_pass,
                              },
                            );
                          });
                      }

                      //this.props.navigation.navigate('MobileOTPVerifiedScreen');
                    } else {
                      alert(Response.data.statusMessage);
                    }
                  })
                  .catch(error => {
                    Alert.alert('', 'Something went wrong ');
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

export default MobileLoginOTPVerificationScreen;

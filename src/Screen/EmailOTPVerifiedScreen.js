import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/EmailOTPVerifiedScreen/emailotpverifiedstyle';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
//import {LinearGradient} from 'expo-linear-gradient';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAwODkwOTk1IiwiYXV0aCI6InBhcnRuZXIiLCJpZCI6MjM1MSwiaWF0IjoxNjc1MTg1NDE5fQ.oKpjXbeFucVEZQjHLTkmQeSthPukNulgUzj9zpGJlqo';

export class EmailOTPVerifiedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local_pass: this.props.route.params.local_pass,
      email: this.props.route.params.email,
    };
  }

  componentDidMount() {
    console.log(
      'this.props.route.params.local_pass',
      this.props.route.params.local_pass,
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagebackground}
          source={require('../assets/Images/complete_Imavatar_flower.png')}
        />

        <View style={styles.logo}>
          <Image source={require('../assets/Icons/logo.png')} />
          <Text style={styles.logotext}>imavatar</Text>
        </View>
        <LinearGradient
          colors={['rgba(255, 102, 88, 1)', 'rgba(248, 167, 58, 1)']}
          style={styles.verifiedmobilebox}>
          <View style={styles.verifiediconbox}>
            <View style={styles.verifiediconborder}>
              <Image source={require('../assets/Icons/right.png')} />
            </View>
          </View>

          <Text style={styles.verifiedboxtext}>Email verified</Text>

          <Text style={styles.verifiedboxpara}>
            Thank you. Your Email id has been verified. Click below to verify
            your email ID.
          </Text>

          <Pressable
            onPress={() => {
              //navigation.navigate('Partner')

              const param = {
                userName: this.state.email,
                password: this.props.route.params.local_pass,
                userType: '6',
              };

              console.log('====================================');
              console.log('param', param);
              console.log('====================================');

              axios
                .post(
                  'http://35.170.79.161:8080/api/user/noAuth/login',
                  param,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
                )
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
                      // this.props.navigation.navigate('Profile', {
                      //   userid: Response.data.data.id,
                      //   token: dem,
                      // });

                      this.props.navigation.navigate('Profile', {
                        userid: this.props.route.params.user_id,
                        token: dem,
                      });
                    });
                });
            }}
            style={styles.verifiedboxbtn}>
            <Text style={styles.verifiedboxbtntext}>Continue</Text>
          </Pressable>
        </LinearGradient>

        {/* <LinearGradient
        colors={['rgba(255, 102, 88, 1)', 'rgba(248, 167, 58, 1)']}
        style={styles.verifiedmobilebox}>
        <View style={styles.verifiediconbox}>
          <View style={styles.verifiediconborder}>
            <Image source={require('../../assets/Icons/right.png')} />
          </View>
        </View>

        <Text style={styles.verifiedboxtext}>Email verified</Text>

        <Text style={styles.verifiedboxpara}>
          Thank you. Your Mobile number has been verified. Click below to verify
          your email ID.
        </Text>

        <Pressable
          onPress={() => navigation.navigate('Partner')}
          style={styles.verifiedboxbtn}>
          <Text style={styles.verifiedboxbtntext}>Continue</Text>
        </Pressable>
      </LinearGradient> */}
      </View>
    );
  }
}

export default EmailOTPVerifiedScreen;

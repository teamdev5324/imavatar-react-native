import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from '../Screen/Auth/MobileLoginOTPVerifiedScreen/mobileloginotpverifiedstyle';
import LinearGradient from 'react-native-linear-gradient';
export class MobileOTPVerifiedScreen extends Component {
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

          <Text style={styles.verifiedboxtext}>Mobile Number Verified</Text>

          <Text style={styles.verifiedboxpara}>
            Thank you. Your Mobile number has been verified. Click below to
            verify your email ID.
          </Text>

          <Pressable
            onPress={() => {
              this.props.navigation.navigate('EmailOTPVerificationScreen', {
                email: this.props.route.params.email,
                userid: this.props.route.params.userid,
                local_pass: this.props.route.params.local_pass,
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
            <Image source={require('../../../../assets/Icons/right.png')} />
          </View>
        </View>

        <Text style={styles.verifiedboxtext}>Mobile Number Verified</Text>

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

export default MobileOTPVerifiedScreen;

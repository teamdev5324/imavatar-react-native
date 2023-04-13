import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Auth/LoginScreen/loginstyle';
import AsyncStorage from '@react-native-community/async-storage';
import profileStatus from '../profileStatus';

export class Splashscreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem('isUserLogin')
      .then(async res => {
        console.log(res, 'res');
        if (res === 'true') {
          try {
            const {verificationStatus} = await profileStatus(
              this.props.login_tokenn,
            );

            console.log('verificationStatus', verificationStatus);

            let data = await AsyncStorage.getItem('data');
            data = JSON.parse(data);

            if (verificationStatus === 'APPROVED') {
              this.props.navigation.replace('Dashboard');
            } else if (
              verificationStatus === 'DRAFT' ||
              verificationStatus === 'REJECT'
            ) {
              this.props.navigation.replace('PersonalDetails', {
                userid: data.data.id,
                token: this.props.login_tokenn,
                data: data,
              });
            } else if (verificationStatus === 'WIP') {
              this.props.navigation.replace('Congratulations', {
                userid: data.data.id,
                token: this.props.login_tokenn,
                data: data,
              });
            }
          } catch (error) {
            console.log(
              '🚀 ~ file: Splashscreen.js:17 ~ Splashscreen ~ setTimeout ~ error:',
              error,
            );
          }
        } else {
          this.props.navigation.replace('Signup');
        }
      })
      .catch(err => {
        console.log(err, 'err');
      });
    // setTimeout(() => {
    //   console.log('dfdfdff', this.props.is_login);
    //   if (this.props.login_tokenn != '') {
    //     this.props.navigation.replace('Signup');
    //   } else {
    //     this.props.navigation.replace('Signup');
    //   }
    // }, 2000);
  }
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            height: '100%',
          }}>
          {/* <Animated.Image
          source={require('../img/logo.png')}
          style={{
            width: this.state.size,
            height: this.state.size,
            resizeMode: 'center',
          }}
        /> */}

          <View style={styles.logo}>
            <Image
              source={require('./assets/Icons/logo.png')}
              style={{height: 100, width: 100}}
            />
            <Text style={[styles.logotext, {fontSize: 28}]}>imavatar</Text>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  login_tokenn: state.userDetails.login_token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);

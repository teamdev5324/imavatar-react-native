import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './emailloginotpverifiedstyle';
import {useNavigation} from '@react-navigation/native';
//import {LinearGradient} from 'expo-linear-gradient';

export default function EmailLoginOTPVerifiedScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagebackground}
        source={require('../../../assets/Images/complete_Imavatar_flower.png')}
      />

      <View style={styles.logo}>
        <Image source={require('../../assets/Icons/logo.png')} />
        <Text style={styles.logotext}>imavatar</Text>
      </View>

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

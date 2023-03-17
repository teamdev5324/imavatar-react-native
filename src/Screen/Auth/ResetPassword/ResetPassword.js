import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './resetpasswordstyle';
import {useNavigation} from '@react-navigation/native';

export default function ResetPassword() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.crossiconbox}>
        <Image
          style={styles.crossicon}
          source={require('../../assets/Icons/cross-icon.png')}
        />
      </View>

      <Image
        style={styles.imagebackground}
        source={require('../../../assets/Images/Imavatar_flower.png')}
      />

      <View style={styles.verificationbox}>
        <View style={styles.logo}>
          <Image source={require('../../assets/Icons/logo.png')} />
          <Text style={styles.logotext}>imavatar</Text>
        </View>

        <Text style={styles.resetpasstext}>Reset Your Password</Text>

        <TextInput
          style={[styles.input, styles.inputmargin]}
          placeholder="New Password*"
        />

        <TextInput style={styles.input} placeholder="Confirm Password*" />

        <TouchableOpacity
          onPress={() => navigation.navigate('Partner')}
          style={styles.confirmbutton}>
          <Text style={styles.confirmbuttontext}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

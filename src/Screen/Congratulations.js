import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Congratulations = () => {
  return (
    <LinearGradient
      colors={['#FD7E4D', '#F8A939']}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/Images/congratulations.png')} />
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 30,
            fontWeight: '500',
            marginTop: 30,
          }}>
          Congratulation!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '400',
            width: 250,
            lineHeight: 24,
            marginTop: 12,
          }}>
          Thank you for successfully submitting the profile. Your account will
          be activated once the details are verified by lmAvatar.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Congratulations;

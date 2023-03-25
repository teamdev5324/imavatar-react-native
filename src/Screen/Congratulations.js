import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Congratulations = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dashboard', route.params);
    }, 5000);
  }, []);

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
      <TouchableOpacity
        style={{
          backgroundColor: '#F47A1E',
          borderRadius: 4,
          paddingHorizontal: 45,
          paddingVertical: 12,
          marginTop: 20,
          width: 150,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('PersonalDetails', route.params);
        }}>
        <Text style={{color: '#fff', fontSize: 14}}>Edit</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Congratulations;

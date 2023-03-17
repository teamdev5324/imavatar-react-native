import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './inputwitheyestyle';

const InputWithEye = ({label, placeholder, value, onChangeName}) => {
  return (
    <View style={styles.changepassinputfull}>
      <Text style={styles.changepassinputlabel}>{label}</Text>
      <View style={styles.changepassinputbox}>
        <TextInput
          style={styles.changepassinput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeName}
        />
        <Image
          style={styles.eyeIcon}
          source={require('../../assets/Icons/eye.png')}
        />
      </View>
    </View>
  );
};

export default InputWithEye;

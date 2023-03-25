import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './inputwitheyestyle';

const InputWithEye = ({ label, placeholder, value, onChangeName }) => {

  const [show, setShow] = useState(true);

  return (
    <View style={styles.changepassinputfull}>
      <Text style={styles.changepassinputlabel}>{label}</Text>
      <View style={styles.changepassinputbox}>
        <TextInput
          style={styles.changepassinput}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={'#AEAEAE'}
          onChangeText={onChangeName}
          secureTextEntry={show}
        />
        <TouchableOpacity onPress={() => (show ? setShow(false) : setShow(true))}>
          <Image
            style={styles.eyeIcon}
            source={show ? require('../../assets/open_eye.png') : require('../../assets/close_eye.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputWithEye;

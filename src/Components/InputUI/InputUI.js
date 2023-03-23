import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './inputuistyle';

const InputUI = ({
  label,
  placeholder,
  value,
  onChangeName,
  keyboard,
  max,
  auto,
  editable,
  secureTextEntry,
}) => {
  return (
    <View style={styles.personaldetailinput}>
      <Text style={styles.inputlable}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeName}
        style={[styles.input, {color: editable ? '#010101' : '#AEAEAE'}]}
        placeholder={placeholder}
        keyboardType={keyboard}
        maxLength={max}
        autoCapitalize={auto}
        editable={editable}
        placeholderTextColor={'#AEAEAE'}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputUI;

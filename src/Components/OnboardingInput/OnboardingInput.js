import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const OnboardingInput = ({
  label,
  isCompulsory,
  placeholder,
  onValueChange,
  value,
  containerStyle,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <View style={{flexDirection: 'row', marginBottom: 8}}>
        <Text style={{color: '#333'}}>{label}</Text>
        {isCompulsory && <Text style={{color: '#FF0000'}}>*</Text>}
      </View>
      <TextInput
        placeholder={placeholder}
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 4,
          padding: 13,
          color: '#000',
        }}
        placeholderTextColor="#D3D3D3"
        value={value}
        onChangeText={onValueChange}
        {...props}
      />
    </View>
  );
};

export default OnboardingInput;

const styles = StyleSheet.create({});

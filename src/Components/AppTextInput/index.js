import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const AppTextInput = ({
  error,
  label,
  textInputStyle,
  onChangeText,
  value,
  icon,
  require: Require,
  onBlur,
  editable = true
}) => {
  return (
    <View style={{marginBottom: 10}}>
      {label && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon && (
            <Image
              source={require('../../assets/HelpinputIcon.png')}
              style={{marginRight: 5}}
            />
          )}
          <Text
            style={{
              marginRight: 4,
              fontSize: 14,
              fontWeight: '400',
              color: '#000',
            }}>
            {label}
          </Text>
          {Require && <Text style={{color: 'red'}}>*</Text>}
        </View>
      )}
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholderTextColor="#000"
          style={[
            {
              backgroundColor: '#F8F8F8',
              borderWidth: 1,
              borderColor: '#d9d9d9',
              height: 40,
              marginTop: 8,
              paddingHorizontal: 15,
              color: '#000',
            },
            textInputStyle,
          ]}
          editable={editable}
        />
        {error !== '' && error !== undefined && (
          <Text style={{color: 'red', marginTop: 4}}>{error}</Text>
        )}
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});

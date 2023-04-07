import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';

const AppDropDown = ({
  label,
  error,
  onChange,
  onBlur,
  value,
  defaultValue,
  data,
}) => {
  return (
    <View style={{marginBottom: 10}}>
      <View
        style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
        <Image
          source={require('../../assets/HelpinputIcon.png')}
          style={{marginRight: 5}}
        />
        <Text
          style={{
            marginRight: 4,
            fontSize: 14,
            fontWeight: '400',
            color: '#000',
          }}>
          {label}
        </Text>
        <Text style={{color: 'red'}}>*</Text>
      </View>
      <SelectDropdown
        defaultButtonText="Select"
        value={value}
        defaultValue={defaultValue}
        onBlur={onBlur}
        renderDropdownIcon={() => {
          return (
            <Image
              source={require('../../assets/VectordownArrow.png')}
              // style={{marginRight: 5}}
            />
          );
        }}
        dropdownIconPosition="right"
        data={data}
        buttonTextStyle={{
          color: '#6D6D6D',
          fontSize: 12,
          fontWeight: '400',
          marginRight: Dimensions.get('window').height * 0.33,
        }}
        buttonStyle={{
          backgroundColor: '#f8f8f8',
          borderColor: '#d9d9d9',
          width: '100%',
          height: 40,
        }}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          onChange(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      {error !== '' && error !== undefined && (
        <Text style={{color: 'red', marginTop: 4}}>{error}</Text>
      )}
    </View>
  );
};

export default AppDropDown;

const styles = StyleSheet.create({});

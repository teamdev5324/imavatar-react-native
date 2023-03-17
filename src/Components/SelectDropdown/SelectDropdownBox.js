import { View, Text } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './selectdropdownboxstyle';

const SelectDropdownBox = ({ data, btntext, color }) => {
  return (
      <SelectDropdown
          buttonStyle={color === "White" ? styles.dropdown1BtnStyleWhite : styles.dropdown1BtnStyle}
          buttonTextStyle={color === "White" ? styles.dropdown1BtnTxtStyleWhite  : styles.dropdown1BtnTxtStyle}
          data={data}
          defaultButtonText={btntext}
          renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={12} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
      />
  )
}

export default SelectDropdownBox;
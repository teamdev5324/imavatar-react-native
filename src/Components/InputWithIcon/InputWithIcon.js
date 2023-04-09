import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './inputwithiconstyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InputWithIcon = ({star, title, select, labelsidetext, show, setShow}) => {
  const [text, onChangeText] = useState('');

  const data = [
    'Operations Manager',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  return (
    <View style={styles.inputwithiconbox}>
      <View style={styles.inputwithiconlabelbox}>
        <View style={styles.inputwithiconlabel}>
          <AntDesign name="questioncircle" color={'#000'} size={12} />
          <Text style={styles.inputwithicontext}>
            {title} {star === 'star' && <Text style={styles.inputstar}>*</Text>}
          </Text>
        </View>

        {labelsidetext && (
          <Text onPress={() => setShow(!show)} style={styles.labelsidefont}>
            Show Price break-up
          </Text>
        )}
      </View>

      {select === 'select' ? (
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={data}
          defaultButtonText="Select"
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#939393'}
                size={12}
              />
            );
          }}
          rowTextStyle={{
            textAlign: 'left',
          }}
          dropdownIconPosition="right"
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
        />
      ) : (
        <TextInput
          onChangeText={onChangeText}
          value={text}
          style={styles.inputwithiconinput}
        />
      )}
    </View>
  );
};

export default InputWithIcon;

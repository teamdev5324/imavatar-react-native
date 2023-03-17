import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './reportsordercompstyle';
import SaveButton from '../SaveButton/SaveButton';

const ReportsOrderComp = () => {
  const data = ['New Orders', 'Ready to Ship', 'In transit', 'Delivered'];

  return (
    <View>
      <View style={styles.orderselectcontainer}>
        <Text style={styles.ordertext}>Select Report type:</Text>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={data}
          defaultButtonText={'Select'}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={12}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
        />
      </View>

      <Text style={styles.ordertext}>Filter by:</Text>

      <View style={styles.filterselectcontainer}>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyletwo}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={data}
          defaultButtonText={'Select Duration'}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={12}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
        />

        <View style={styles.filtercompdatetime}>
          <Text style={styles.filterdatetimetext}>End date</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/Icons/calendar.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btncontainerhead}>
        <SaveButton title="Download" nobradius="nobradius" />

        <SaveButton title="Reset" nobradius="nobradius" maright />
      </View>
    </View>
  );
};

export default ReportsOrderComp;

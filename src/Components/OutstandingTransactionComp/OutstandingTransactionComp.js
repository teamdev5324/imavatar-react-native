import { View, Text } from 'react-native';
import React from 'react';
import PaymentCompBox from '../PaymentCompBox/PaymentCompBox';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './outstandingtransactioncompstyle';

const OutstandingTransactionComp = ({ show, setShow }) => {

    const selectdata = ["Operations Manager", "Catalog Manager", "Finance Manager", "Partner"];
    
  return (
    <View>
          <View style={styles.detailstextbox}>
              <Text style={styles.transtext}>Transaction details</Text>

              <SelectDropdown
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  data={selectdata}
                  defaultButtonText={'Select Duration'}
                  renderDropdownIcon={isOpened => {
                      return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={12} />;
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown1DropdownStyle}
              />
          </View>

      <PaymentCompBox onPress={() => setShow(!show)} />

      <PaymentCompBox onPress={() => setShow(!show)} />
    </View>
  )
}

export default OutstandingTransactionComp;
import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './modelpopupstyle';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SaveButton from '../SaveButton/SaveButton';

const ModelPopUp = ({ onPress }) => {

    const selectdata = ["Operations Manager", "Catalog Manager", "Finance Manager", "Partner"];
    const [name, onChangeName] = useState("");

  return (
      <View style={styles.modelhead}>
          <View style={styles.modelpopup}>
            <View style={styles.modelpopupinner}>
              <View style={styles.selectboxcontainer}>
                  <Text style={styles.selectboxtext}>Role</Text>
                  <SelectDropdown
                      buttonStyle={styles.dropdown1BtnStyle}
                      data={selectdata}
                      defaultButtonText={'Select'}
                      renderDropdownIcon={isOpened => {
                          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={8} />;
                      }}
                      dropdownIconPosition={'right'}
                      dropdownStyle={styles.dropdown1DropdownStyle}
                  />
              </View>

              <View style={styles.modelinputbox}>
                  <Text style={styles.modelinputlable}>Name</Text>
                  <TextInput
                      value={name}
                      onChangeText={onChangeName}
                      style={styles.modelinput}
                  />
              </View>

              <View style={styles.modelinputbox}>
                  <Text style={styles.modelinputlable}>Email</Text>
                  <TextInput
                      value={name}
                      onChangeText={onChangeName}
                      style={styles.modelinput}
                  />
              </View>

              <View style={styles.modelinputbox}>
                  <Text style={styles.modelinputlablem}>Mobile Number</Text>
                  <TextInput
                      value={name}
                      onChangeText={onChangeName}
                      style={styles.modelinput}
                  />
              </View>
             
                  <Text style={styles.modeldesc}>Please ensure that the Email ID and Mobile entered are valid and correct as the notifications will be sent to user for authentication
                  </Text>
                  
                  <View style={styles.modelbuttoncontainer}>
                      <SaveButton title="Save" />
                      <SaveButton title="Cancel" maright={true} onPress={onPress} />
                  </View>
           </View>
          </View>
      </View>
  )
}

export default ModelPopUp
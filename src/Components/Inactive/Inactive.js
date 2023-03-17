import { View } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActiveCompBox from '../ActiveCompBox/ActiveCompBox';
import styles from './inactivestyle';

const Inactive = () => {

    const selectdata = ["Operations Manager", "Catalog Manager", "Finance Manager", "Partner"];

    return (
        <View>

            <SelectDropdown
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                data={selectdata}
                defaultButtonText={'Select Category'}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={12} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
            />

            <ActiveCompBox />
            <ActiveCompBox />
        </View>
    )
}

export default Inactive;
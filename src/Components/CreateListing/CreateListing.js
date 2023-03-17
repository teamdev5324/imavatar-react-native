import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './createlistingstyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateListing = ({onPress}) => {
  const [searchtext, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.ordersearchbox}>
        <TextInput
          style={styles.searchinput}
          placeholder="Search by Product category"
          value={searchtext}
          onChangeText={setSearchText}
        />
        <Image
          style={styles.searchIcon}
          source={require('../../assets/Icons/searchicon.png')}
        />
      </View>

      <View style={styles.creatingtextboxhead}>
        <Text style={styles.creatingheadtext}>No listing created</Text>
        <Text style={styles.creatingparatext}>
          Currently you do not have any active listing. Get started by creating
          your new listing.
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.creatinglistbtn}>
          <Text style={styles.btntextcolor}>Add Single Catalog</Text>
          <Ionicons name={'information-circle'} color={'#fff'} size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateListing;

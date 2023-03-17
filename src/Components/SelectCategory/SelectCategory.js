import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './selectcategorystyle';
import SelectDropdownBox from '../SelectDropdown/SelectDropdownBox';
import ImageBox from '../ImageBox/ImageBox';

const SelectCategory = ({onCPress}) => {
  const catdata = [
    'Agarbatti',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  const subcatdata = [
    'Operations Manager',
    'Catalog Manager',
    'Finance Manager',
    'Partner',
  ];

  const [searchtext, setSearchText] = useState('');

  const [selectcategory, setSelectCategory] = useState('Select Box');

  return (
    <View>
      <Text style={styles.catalogbottomtext}>
        Catalog uploads &gt; Product available on IMA portal
      </Text>

      {selectcategory === 'Select Box' ? (
        <>
          <View style={styles.catalogsearchbox}>
            <TextInput
              style={[
                styles.catalogsearchinput,
                {fontSize: searchtext ? 14 : 12},
              ]}
              placeholder="Idols frames"
              value={searchtext}
              onChangeText={setSearchText}
            />
            <Image
              style={styles.searchIcon}
              source={require('../../assets/Icons/searchicon.png')}
            />
          </View>

          <View style={styles.selectboxhead}>
            <SelectDropdownBox data={catdata} btntext="Select Category" />

            <SelectDropdownBox data={subcatdata} btntext="Sub Category" />
          </View>

          <View style={styles.singlecatbtnbox}>
            <Pressable
              style={styles.singlecatbtn}
              onPress={() => setSelectCategory('Image Box')}>
              <Text style={styles.singlecatbtntext}>Continue</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <View>
          <View style={styles.imageboxcontainerhead}>
            <ImageBox
              image={require('../../assets/Images/ganesh.png')}
              title="Ganeshji ceramic idol 8 inch"
            />

            <ImageBox
              image={require('../../assets/Images/ganeshtwo.png')}
              title="Ganeshji ceramic idol 8 inch"
            />

            <ImageBox
              image={require('../../assets/Images/ganeshthree.png')}
              title="Ganeshji ceramic idol 8 inch"
            />

            <ImageBox
              image={require('../../assets/Images/ganeshfour.png')}
              title="Ganeshji ceramic idol 8 inch"
            />
          </View>

          <View style={styles.singlecatbtnbox}>
            <Pressable style={styles.singlecatbtn} onPress={onCPress}>
              <Text style={styles.singlecatbtntext}>Continue</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default SelectCategory;

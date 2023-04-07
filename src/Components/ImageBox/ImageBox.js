import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './imageboxstyle';
import {useDispatch} from 'react-redux';
import {editProductInfoAction} from '../../reducers/UserReducer/user_actions';

const ImageBox = ({image, title, item, navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.imageboxcontainer}>
      <View style={styles.imageboxone}>
        <Image source={item?.image} style={{height: 87, width: 87}} />
      </View>

      <View style={styles.imageboxtwo}>
        <Text style={styles.imageboxtwotext}>{item?.category}</Text>
        <Pressable
          style={styles.imageboxtwobtn}
          onPress={() => {
            navigation.navigate('CatalogAddProductInfo');
            const info = {
              item: item,
              isEdit: true,
            };
            dispatch(editProductInfoAction(info));
          }}>
          <Text style={styles.imageboxtwobtntext}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImageBox;

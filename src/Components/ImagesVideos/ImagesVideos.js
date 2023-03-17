import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './imagesvideosstyle';
import SaveButton from '../SaveButton/SaveButton';

const ImagesVideos = ({onISBtnPress, onIGOBBtnPress, onCancelPress}) => {
  return (
    <View>
      <View style={styles.Imageboxhead}>
        <View style={styles.Imageboxone}>
          <View style={styles.Imageboxitem}>
            <Image source={require('../../assets/Images/rudrakshabig.png')} />
          </View>

          <View style={styles.Imageboxitem}>
            <Image
              style={styles.Imageboxitemimg}
              source={require('../../assets/Images/Camera.png')}
            />
            <Text style={styles.Imageboxitemtext}>Upload</Text>
          </View>

          <View style={styles.Imageboxitem}>
            <Image
              style={styles.Imageboxitemimg}
              source={require('../../assets/Images/Camera.png')}
            />
            <Text style={styles.Imageboxitemtext}>Upload</Text>
          </View>
        </View>

        <View style={styles.Imageboxtwo}>
          <View style={[styles.Imageboxitem, {marginRight: 45}]}>
            <Image
              style={styles.Imageboxitemimg}
              source={require('../../assets/Images/Camera.png')}
            />
            <Text style={styles.Imageboxitemtext}>Upload</Text>
          </View>

          <View style={styles.Imageboxitem}>
            <Image
              style={styles.Imageboxitemimg}
              source={require('../../assets/Images/Livevideo.png')}
            />
            <Text style={styles.Imageboxitemtext}>Upload{'\n'}Video</Text>
          </View>
        </View>
      </View>

      <View style={styles.productvitalbtnbox}>
        <SaveButton
          title="Save & Next"
          nobradius="nobradius"
          onPress={onISBtnPress}
        />
        <SaveButton
          title="Save & Go Back"
          nobradius="nobradius"
          onPress={onIGOBBtnPress}
        />
      </View>

      <SaveButton
        title="Cancel"
        nobradius="nobradius"
        onPress={onCancelPress}
      />
    </View>
  );
};

export default ImagesVideos;

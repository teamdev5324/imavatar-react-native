import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './imageboxstyle';

const ImageBox = ({image, title}) => {
  return (
      <View style={styles.imageboxcontainer}>
          <View style={styles.imageboxone}>
              <Image source={image} />
          </View>

          <View style={styles.imageboxtwo}>
              <Text style={styles.imageboxtwotext}>{title}</Text>
              <Pressable style={styles.imageboxtwobtn}>
                  <Text style={styles.imageboxtwobtntext}>Add</Text>
              </Pressable>
          </View>
      </View>
  )
}

export default ImageBox;
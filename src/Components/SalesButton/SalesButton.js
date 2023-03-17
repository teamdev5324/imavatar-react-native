import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './salesbuttonstyle';

const SalesBtn = ({ title, onPress, salebtn }) => {
  return (
    <TouchableOpacity style={[styles.salesanalyticsbtn, salebtn === title && { backgroundColor: '#FF6658'}]} onPress={onPress}>
      <Text style={[styles.salesanalyticsbtntext, salebtn === title && {color: "#fff" }]}>{title}</Text>
      </TouchableOpacity>
  )
}

export default SalesBtn;
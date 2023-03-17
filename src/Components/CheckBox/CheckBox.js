import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CheckBox = props => {
  const iconName = props.isChecked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable onPress={props.onPress}>
        {/* <MaterialCommunityIcons name={iconName} size={24} color="#FF6658"/> */}
      </Pressable>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    fontSize: 12,
    color: '#000',
  },
});

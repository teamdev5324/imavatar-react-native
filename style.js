import React, {Component} from 'react';
import {View, Text} from 'react-native';

const toastConfig = {
  warning: ({text1, props}) => (
    <View
      style={{
        height: 70,
        width: '90%',
        backgroundColor: 'orange',
        padding: 4,
        alignSelf: 'center',
        borderRadius: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          paddingTop: 20,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        {text1}
      </Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  done: ({text1, props}) => (
    <View
      style={{
        height: 70,
        width: '90%',
        backgroundColor: '#1affc6',
        padding: 4,
        alignSelf: 'center',
        borderRadius: 20,
      }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export {toastConfig};

import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export const TextTampan = ({ children, ...props }) => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  )
};

export const TextTampan1 = ({ children, ...props }) => {
  return (
    <Text style={styles.text1} {...props}>
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirLTStd-Medium'
  },
  text1: {
    fontSize: 20,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: 'AvenirLTStd-Medium'
  }
});

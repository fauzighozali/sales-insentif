import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export const InputTampan1 = props => (
  <Input
    {...props}
    ref={input => props.init(input, props.id)}
    containerStyle={styles.containerStyle_Tampan1}
    inputContainerStyle={styles.inputContainerStyle_Tampan1}
    inputStyle={styles.inputStyle_Tampan1}
    leftIcon={
      <Icon name={props.icon} size={22} color={'#909090'}/> // setting icon
    }
  />
);

const styles = StyleSheet.create({
  containerStyle_Tampan1: {
    width: '100%',
    marginVertical: 2
  },
  inputContainerStyle_Tampan1: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    borderColor: '#909090', //setting line under form
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  inputStyle_Tampan1: {
    color: '#616161'
  }
});

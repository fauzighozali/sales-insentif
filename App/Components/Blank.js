import React from 'react';
import { View, StyleSheet } from "react-native";

export const Blank = () =>
  <View style={styles.container}/>
;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', padding: 20
  }
});

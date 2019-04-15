import React from 'react'
import { View, StyleSheet } from 'react-native'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { ConnectionToast } from "./ConnectionToast";
import { withInteraction } from "../Lib/renderingHandler";

const enhance = compose(
  connect(
    state => ({
      isConnected: state.network.isConnected
    })
  )
);

export const Screen = enhance(props => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <ConnectionToast/>
      </View>
      {props.children}
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  overlay: {
    zIndex: 2
  }
});

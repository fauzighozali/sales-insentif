import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';

const enhance = compose(
  connect(
    state => ({
      isConnected: state.network.isConnected
    })
  )
);

export const ConnectionToast = enhance((props) => {
  return (
    <React.Fragment>
      {
        !props.isConnected &&
        <View style={styles.container}>
          <Animatable.View animation={'fadeInDown'} useNativeDriver={true}>
            <View style={styles.box}>
              <Text style={styles.text}>
                Connecting...
              </Text>
            </View>
          </Animatable.View>
        </View>
      }
    </React.Fragment>
  )
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -1,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    zIndex: 2
  },
  box: {

    height: 30,
    backgroundColor: '#f35363',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  text: {
    color: '#fff'
  }
});

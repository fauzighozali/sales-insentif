import React from 'react'
import { View, StyleSheet, Platform, Dimensions, Image } from 'react-native'
import { TextTampan } from "../../Components/Text";
import { compose, withHandlers } from 'recompose'
import { withMaybe } from "../../Lib/renderingHandler";
import { Profile } from "./module/Profile";
import { device } from "../../Lib/dimensions";
import { connect } from 'react-redux';
import ActionLogin from "../../Redux/Login";

const enhance = compose(
  connect(
    state => ({
      karyawan: state.auth.karyawan
    }),
    dispatch => ({
      dispatchLogout: () => dispatch(ActionLogin.logout())
    })
  ),
  withHandlers({
    logout: () => () => {

    }
  })
);

export const Container = enhance(props => {
  return (
    <View style={styles.container}>
      <View style={[styles.backgroundContainer, styles.absolute]}>
        <Image source={{ uri: 'https://ak0.picdn.net/shutterstock/videos/13905140/thumb/1.jpg' }}
               style={{
                 width: '100%',
                 height: device.height / 2.5,
                 resizeMode: 'cover'
               }}
        />
      </View>
      <Profile navigation={props.navigation} profile={props.karyawan}/>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <TextTampan style={{ fontSize: 20, color: '#F7941D', fontWeight: 'bold' }} onPress={props.dispatchLogout}>
          Logout
        </TextTampan>
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundContainer: {
    height: device.height / 2.5,
    // borderBottomRightRadius: Platform.OS === 'ios' ? 40 : 100,
    // borderBottomLeftRadius: Platform.OS === 'ios' ? 40 : 100,
    borderBottomWidth: 90,
    borderBottomColor: 'transparent',
    zIndex: 0
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});

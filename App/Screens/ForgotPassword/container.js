import React from 'react'
import ActionLogin from "../../Redux/Login";
import { View, Image, StyleSheet } from 'react-native'
import { compose, lifecycle, pure } from 'recompose'
import { Form } from "./module/Form";
import { connect } from "react-redux";
import { TextTampan } from "../../Components/Text";
import { BackButton } from "../../Components/Button";

const enhance = compose(
  connect(
    state => ({ auth: state.auth }),
    dispatch => ({
      dispatchLogin: (payload) =>
        dispatch(ActionLogin.loginRequest(payload))
    })
  ),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { fetching, error, message } = nextProps.auth;
      if (fetching === false) {
        if (error === false) {
          nextProps.navigation.navigate({ key: 'Home', routeName: 'Home' })
        } else {
          alert(message)
        }
      }
    }
  }),
  pure
);

export const Container = enhance(({ navigation, auth, dispatchLogin }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, alignItems: 'flex-start' }}>
        <BackButton iconSize={50}/>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.logo}>
          <TextTampan h4>
            Forgot Password?
          </TextTampan>
          <TextTampan style={{textAlign: 'center'}}>
            Reset password anda dengan email atau nomor handphone.
          </TextTampan>
        </View>

        <Form navigation={navigation} loading={auth.fetching} dispatchLogin={dispatchLogin}/>

      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 10
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  logo: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: 0.5
  },
  input: {
    marginHorizontal: 10, marginVertical: 5
  }
});

import React from 'react'
import LoginActions from '../Redux/Login'
import { StyleSheet } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { compose, withHandlers } from 'recompose'
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'


const enhance = compose(
  connect(
    null,
    dispatch => ({
      autoLogin: ({ token, data }) => dispatch(LoginActions.loginSuccess(token, data))
    })
  ),
  withNavigation,
  withHandlers({
    loginGoogleClick: (props) => async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        if (response.accessToken) {
          const to = 'Home';
          props.autoLogin({ token: response.accessToken, data: response.user });
          props.navigation.navigate({ key: to, routeName: to })
        }
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.tron.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.tron.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.tron.log(error)
        } else {
          console.tron.log(error)
        }
      }
    }
  })
);

export const ButtonGoogle = enhance(props => (
  <Button
    title="Sign In With Google"
    icon={<Icon name='google' size={15} color={'#fff'} type={'font-awesome'}/>}
    onPress={props.loginGoogleClick}
    loadingProps={{ size: "large", color: "#ffffff" }}
    titleStyle={styles.titleStyle_Tampan1}
    buttonStyle={styles.buttonStyle_Tampan1}
    // containerStyle={styles.containerStyle_Tampan1}
  />
));

const styles = StyleSheet.create({
  containerStyle_Tampan1: {
    flex: 1
  },
  titleStyle_Tampan1: {
    fontWeight: "700",
  },
  buttonStyle_Tampan1: {
    backgroundColor: "#8582fe",
    height: 50,
    borderRadius: 0.1,
    marginHorizontal: 10
  }
});

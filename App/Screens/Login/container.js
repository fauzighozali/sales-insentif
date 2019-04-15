import React from 'react'
import ActionLogin from "../../Redux/Login";
import { View, Image, StyleSheet } from 'react-native'
import { compose, lifecycle, pure } from 'recompose'
import { Form } from "./module/Form";
import { connect } from "react-redux";

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
          nextProps.navigation.navigate({key: 'Home', routeName: 'Home'})
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
     <View style={{ flex: 1 }}>
       <View style={styles.logo}>
         <Image
           style={{ height: 120, width: 220 }}
           source={{ uri: 'http://www.ag-it.com/wp-content/uploads/2017/04/logoagit-new.png' }}
         />
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
  logo: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
 },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  form: {
    flex: 0.4
  },
  input: {
    marginHorizontal: 10, marginVertical: 5
  }
});

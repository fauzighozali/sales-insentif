import React from 'react'
import { compose, withState, withProps, withHandlers } from 'recompose'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ButtonTampan1 } from "../../../Components/Button"
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { InputTampan1 } from "../../../Components/Input"
import { TextTampan } from "../../../Components/Text";
import { ButtonGoogle } from "../../../Components/ButtonGoogle";

GoogleSignin.configure();

const enhance = compose(
  withProps({ inputs: [] }),
  withState('email', 'setEmail', ''),
  withHandlers({
    initInput: ({ inputs }) => (input, id) => inputs[id] = input,
    loginClick: (
      {
        email,
        dispatchLogin
      }
    ) => () => dispatchLogin({ email }),
    navigate: ({ navigation }) => (to) => () => navigation.navigate({key: to, routeName: to})
  })
);

export const Form = enhance(props => {
    return (
      <View style={styles.form}>

        <View style={styles.input}>
          <InputTampan1
            id={'email'}
            init={props.initInput}
            secureTextEntry={true}
            blurOnSubmit={true}
            autoCapitalize="none"
            returnKeyType={"done"}
            icon={'lock'}
            onChangeText={(value) => props.setEmail(value)}
            placeholder='Email'/>
        </View>
        <View style={styles.containerStyle}>
          <TouchableOpacity
            style={styles.navBar}
            loading={props.loading}
            onPress={props.navigate('Login')}>
              <Text style={styles.titleStyle}>
                Register
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  })
;

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  line: {
    height: 1,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 10,
    borderColor: '#fe506a'
  },
  box: {
    marginVertical: 10,
    alignItems: 'center'
  },
  navBar: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: "#F7941D",
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleStyle: {
    fontWeight: "700",
    fontSize: 15,
    color: '#fff'
  }
});

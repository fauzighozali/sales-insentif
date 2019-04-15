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
  withState('username', 'setUsername', '179310'),
  withState('password', 'setPassword', '179310'),
  withHandlers({
    initInput: ({ inputs }) => (input, id) => inputs[id] = input,
    loginClick: (
      {
        username,
        password,
        dispatchLogin
      }
    ) => () => dispatchLogin({ username, password }),
    navigate: ({ navigation }) => (to) => () => navigation.navigate({key: to, routeName: to})
  })
);

export const Form = enhance(props => {
    return (
      <View style={styles.form}>

        <View style={styles.input}>
          <InputTampan1
            id={'username'}
            init={props.initInput}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              props.inputs['password'].focus()
            }}
            returnKeyType={"next"}
            autoCapitalize="none"
            icon={'user'}
            onChangeText={(value) => props.setUsername(value)}
            placeholder='Username'/>
        </View>
        <View style={styles.input}>
          <InputTampan1
            id={'password'}
            init={props.initInput}
            secureTextEntry={true}
            blurOnSubmit={true}
            autoCapitalize="none"
            returnKeyType={"done"}
            icon={'lock'}
            onChangeText={(value) => props.setPassword(value)}
            placeholder='Password'/>
        </View>
        <View style={styles.containerStyle}>
          <TouchableOpacity
            style={styles.navBar}
            loading={props.loading}
            onPress={props.navigate('Timeline')}>
              <Text style={styles.titleStyle}>
                Login
              </Text>
          </TouchableOpacity>
        </View>
        {/*<View style={{ marginVertical: 10, alignItems: 'center', flexDirection: 'row' }}>*/}
          {/*<View style={styles.line}/>*/}
          {/*<TextTampan>*/}
            {/*atau login dengan*/}
          {/*</TextTampan>*/}
          {/*<View style={styles.line}/>*/}
        {/*</View>*/}
        <View style={styles.box}>
         <TextTampan>
           Belum punya akun? <TextTampan onPress={props.navigate('Register')} style={styles.register}> Daftar sekarang </TextTampan>
         </TextTampan>
       </View>
       <TouchableOpacity style={styles.box} onPress={props.navigate('ForgotPassword')}>
         <TextTampan style={styles.forgotPassword}>
           Lupa Password ?
         </TextTampan>
       </TouchableOpacity>

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
    marginVertical: 15,
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
  },
  register: {
    color: '#F7941D',
    fontWeight: 'bold',
    fontSize: 15
  },
  forgotPassword: {
    color: '#F7941D',
    fontSize: 15
  }
});

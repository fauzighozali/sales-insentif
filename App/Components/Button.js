import React from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon, Button, ThemeProvider } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { compose, withHandlers, withState } from 'recompose'


const enhance = compose(
  withNavigation,
  withHandlers({
    openDrawer: ({ navigation }) => () => navigation.toggleDrawer(),
    goBack: ({ navigation }) => () => navigation.goBack(),
    navigate: ({ navigation }) => to => () => navigation.navigate({ key: to, routeName: to })
  })
);

export const BackButton = enhance(({ goBack, iconSize = 40 }) => {
  return (
    <TouchableWithoutFeedback underlayColor={'transparent'} onPress={goBack}>
      <Icon name='keyboard-arrow-left' color={'#F7941D'} type='material' size={iconSize}/>
    </TouchableWithoutFeedback>
  )
});

export const BurgerButton = enhance(({ openDrawer, iconSize = 30 }) => {
  return (
    <TouchableOpacity onPress={openDrawer} style={{ marginLeft: 10 }} underlayColor={'transparent'}>
      <Icon name='reorder' color={'#000'} type='material' size={iconSize}/>
    </TouchableOpacity>
  )
});

export const NotifButton = enhance(({ navigate, iconSize = 30 }) => {
  return (
    <TouchableOpacity onPress={navigate('Notifications')} style={{ marginRight: 10 }} underlayColor={'transparent'}>
      <Icon iconStyle={{
        position: 'absolute',
        top: -5,
        left: 0
      }} name='fiber-manual-record' color={'#3ec1b8'} type='material' size={15}/>
      <Icon
        iconStyle={{
          transform: [{ rotate: '45deg'}]
        }}
        name='notifications' color={'#fe5b65'} type='material' size={iconSize}/>
    </TouchableOpacity>
  )
});

const theme = {
  Button: {
    titleStyle: {
      fontWeight: "700"
    },
    containerStyle: {
      marginTop: 10
    },
    buttonStyle: {
      backgroundColor: "#F7941D",
      height: 50,
      borderRadius: 10,
      marginHorizontal: 10
    },
    loadingProps: {
      size: "large",
      color: "#ffffff"
    }
  },
};

export const ButtonTampan1 = props => (
  <ThemeProvider theme={theme}>
    <Button {...props}/>
  </ThemeProvider>
);

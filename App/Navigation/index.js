import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Easing, Animated, Platform, View, Text, Image, StyleSheet } from 'react-native'
import { BackButton, NotifButton, BurgerButton } from "../Components/Button"
import { LoginScreen } from '../Screens/Login'
import { TimelineScreen } from "../Screens/Timeline"
import { ProfileScreen } from "../Screens/Profile"
import { RegisterScreen } from "../Screens/Register";
import { ForgotPasswordScreen } from "../Screens/ForgotPassword";

const DrawerNavigation = createDrawerNavigator(
  {
    Timeline: {
      screen: TimelineScreen,
      navigationOptions: {
        title: 'SOP'
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile'
      }
    }
  }
);

const styles = StyleSheet.create({
  icon:{
    width: 18,
    height: 18
  },
  header: {
    flexDirection: 'column',
    paddingTop: 40,
    paddingLeft: 16,
    height: 170
  },
  subTitle: {
    height: 56,
    paddingTop: 8
  },
  drawerTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000000'
  },
  drawerEmail: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000000'
  }
});

export const AppNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile'
      }
    },
    Timeline: {
      screen: DrawerNavigation,
      navigationOptions: ({ navigation }) => ({
        title: 'Sales Insentif - SOP',
        headerTitleStyle: {
        color: '#F7941D',
        },
        headerLeft: (<BurgerButton/>)
      })
    }
  },
  {
    initialRouteName: 'Intro',
    navigationOptions: {
      gesturesEnabled: true,
    },
    mode: "card",
    headerTransitionPreset: "uikit",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(2)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX: translateX }] };
      }
    }),
  }
);

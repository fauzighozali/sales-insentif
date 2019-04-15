import React from "react";
import { BackHandler, View, StatusBar, Platform } from "react-native";
import StartupActions from "../Redux/Startup";
import { NavigationActions } from "react-navigation";
import connect from "react-redux/es/connect/connect";
import { AppWithNavigationState } from "./index";
import SplashScreen from 'react-native-splash-screen';
import { compose, withHandlers, lifecycle, pure } from 'recompose';
import OneSignal from 'react-native-onesignal';
import {requestLocationPermission} from '../Lib/permission'

const mapStateToProps = (state) => ({
  state: state.nav
});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  goBack: () => dispatch(NavigationActions.back())
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onBackPress: (props) => () => {
      const { state } = props;
      if (state.routes.length === 1 && (state.routes[0].routeName === 'Login')) {
        return false;
      }
      props.goBack();
      return true;
    },
    onReceived: (notification) => (key) => {
      console.tron.log({
        asu: notification,
        wew: key
      });
    },
    onOpened: (openResult) => (nob) => {
      console.tron.log({
        open: openResult,
        kimak: nob
      })
    },
    onIds: (device) => () => {
      console.tron.log('Device info: ', device);
    }
  }),
  lifecycle({
    async componentWillMount() {
      await requestLocationPermission();
      // OneSignal.init("b1a8bf05-bea4-402e-8827-2af26045bbc8");
      //
      // console.tron.log(this.props)
      // OneSignal.addEventListener('received', this.props.onReceived);
      // OneSignal.addEventListener('opened', this.props.onOpened);
      // OneSignal.addEventListener('ids', this.props.onIds);


    },
    componentDidMount() {
      SplashScreen.hide();
      const { startup, onBackPress } = this.props;
      startup();
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
    },
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);

      // OneSignal.removeEventListener('received', this.props.onReceived);
      // OneSignal.removeEventListener('opened', this.props.onOpened);
      // OneSignal.removeEventListener('ids', this.props.onIds);

    }
  }),
  pure
);


const RootScreen = enhance(() => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={'#F7941D'}
                 barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}/>
      <AppWithNavigationState/>
    </View>
  )
});

export default RootScreen;

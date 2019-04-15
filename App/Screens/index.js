import DebugConfig from '../Config/DebugConfig'
import React from 'react'
import createStore from '../Redux'
import RootWrapper from "./root";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { AppNavigation } from '../Navigation'

const { store, persistor } = createStore();

const AppNinja = reduxifyNavigator(AppNavigation, "root");
const mapStateToProps = (state) => ({ state: state.nav });

export const AppWithNavigationState = connect(mapStateToProps)(AppNinja);

function App() {
  return (
    <Provider store={store} key={Math.random()}>
      <PersistGate loading={null} persistor={persistor}>
        <RootWrapper/>
      </PersistGate>
    </Provider>
  )
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App

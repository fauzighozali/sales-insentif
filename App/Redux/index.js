import { combineReducers } from 'redux'
import configureStore from './create-store'
import rootSaga from '../Sagas/'
import { persistReducer } from 'redux-persist'
import { REDUX_PERSIST } from "./create-store";
import { reducer as network } from 'react-native-offline';
import { reducer as navReducer } from './Navigation'
import { reducer as loginReducer } from './Login'
import { reducer as taskReducer } from './Task'
import { reducer as appReducer } from './App'

export const reducers = combineReducers({
  network,
  nav: navReducer,
  app: appReducer,
  auth: loginReducer,
  task: taskReducer
});

export default () => {

  let { store, sagasManager, sagaMiddleware, persistor } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      let nextRootReducer = require('./').reducers;
      if (REDUX_PERSIST.active) {
        const persistConfig = REDUX_PERSIST.storeConfig;
        nextRootReducer = persistReducer(persistConfig, reducers);
      }

      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return {
    store,
    sagasManager,
    sagaMiddleware,
    persistor
  }
}

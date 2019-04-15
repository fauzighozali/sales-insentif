import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { DebugConfig } from '../Config/DebugConfig'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createNetworkMiddleware } from 'react-native-offline';

export const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage,
    blacklist: ['nav']
  }
};

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const persistedReducer = persistReducer(REDUX_PERSIST.storeConfig, rootReducer);

  const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );

  const networkMiddleware = createNetworkMiddleware();
  const sagaMonitor = DebugConfig.useReactotron ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(navMiddleware, sagaMiddleware, networkMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = DebugConfig.useReactotron ? console.tron.createStore : createStore;
  const store = createAppropriateStore(persistedReducer, compose(...enhancers));

  let sagasManager = sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);

  return {
    store,
    persistor,
    sagasManager,
    sagaMiddleware
  }
}

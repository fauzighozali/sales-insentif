import { takeLatest, all, fork } from 'redux-saga/effects'
import { networkEventsListenerSaga } from 'react-native-offline';
import API from '../Services/api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/Startup'
import { LoginTypes } from '../Redux/Login'
import { TaskTypes } from "../Redux/Task";
import { AppTypes } from "../Redux/App";

/* ------------- Sagas ------------- */

import { startup } from './Startup'
import { openLocationWatch, getUserLocation, getLocationActiveSagas } from './App/Location'
import { loginSaga, autologin } from "./Login";
import { taskSaga } from './Task';

/* ------------- API ------------- */

export const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    fork(networkEventsListenerSaga, { timeout: 2000, checkConnectionInterval: 20000 }),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AppTypes.GET_LOCATION_REQUEST, getUserLocation),
    takeLatest(LoginTypes.AUTO_LOGIN, autologin),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga, api),
    takeLatest(TaskTypes.TASK_REQUEST, taskSaga, api)
  ])
}

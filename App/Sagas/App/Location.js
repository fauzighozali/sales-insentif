import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import AppInActions from './../../Redux/App'
import { locationChangeChannel, getMyLocationChannel } from './WatchPostion'
import request from "../../Services/request";

function * locationChange ({ coords }) {
  const { latitude, longitude } = coords;
  yield put(AppInActions.locationChange({ latitude, longitude }))
}

export const openLocationWatch = function* () {
  const channel = yield call(locationChangeChannel);
  yield takeEvery(channel, locationChange)
};

function userPositionPromised() {
  const position = {};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition (
      location  => position.on({location}),
      error     => position.on({error}),
      { enableHighAccuracy: true }
    )
  }
  return { getLocation: () => new Promise(location => position.on = location) }
}

export const getUserLocation = function* () {
  const { getLocation } = yield call(userPositionPromised)
  const { error, location } = yield call(getLocation)
  if (error) {
    const message = 'Tidak bisa mendapatkan lokasi.';
    yield put(AppInActions.getLocationFailure(message))
  } else {
    const {latitude, longitude} = location.coords;
    yield put(AppInActions.locationChange({ latitude, longitude }))
  }
};

export const getLocationActiveSagas = function* (api) {
  const response = yield call(request, api.locationActive);
  if (response.success) {
    const { data } = response.data;
    yield put(AppInActions.getLocationActiveSuccess(data));
  } else {
    const message = response.message;
    yield put(AppInActions.getLocationActiveFailure(message));
  }
};

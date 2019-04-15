import { put, select } from 'redux-saga/effects'
import LoggedInActions, { isLoggedIn } from '../../Redux/Login'

export const selectLoggedInStatus = (state) => {
  return isLoggedIn(state.auth.token)
};

export function* startup() {
  const isLoggedIn = yield select(selectLoggedInStatus);
  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  } else {
    yield put(LoggedInActions.logout())
  }
}

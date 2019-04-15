import { call, put, select } from 'redux-saga/effects'
import request from '../../Services/request'
import LoggedInActions from '../../Redux/Login'
import { api as apiTampan } from './../index'

export const selectToken = (state) => {
  return state.auth.token
};

export const loginSaga = function* (api, action) {
  const response = yield call(request, api.login, action.payload);
  if (response.success) {
    const { account, token } = response.data;
    // console.tron.log(data);
    // const { account, token} = response.data;
    yield put(LoggedInActions.loginSuccess(account, token));
    // yield put(LoggedInActions.autoLogin())
  } else {
    const message = response.message;
    yield put(LoggedInActions.loginFailure(message));
  }
};

export function* autologin() {
  // const token = yield select(selectToken);
  // const { api } = apiTampan;
  // api.setHeader('Bearer', `${token}`);
}

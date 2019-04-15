import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { api as apiTampan } from './../../Sagas'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['token', 'user_login'],
  loginFailure: ['message'],
  logout: null,
  autoLogin: null
});

export const LoginTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  user_login: null,
  karyawan: null,
  fetching: null,
  error: null,
  message: null
});

/* ------------- Reducers ------------- */

export const request = (state, action) => {
  const { payload } = action;
  return Object.assign({}, state, { fetching: true, error: null, message: null, payload })
};

export const success = (state, action) => {
  const { token, user_login } = action;
  return Object.assign({}, state, { fetching: false, error: false, message: null, token, user_login });
};

export const failure = (state, action) => {
  const { message } = action;
  return Object.assign({}, state, { fetching: false, error: true, message, token: null });
};

export const logout = () => {
  return INITIAL_STATE;
};

export const autoLogin = (state) => state;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
  [Types.AUTO_LOGIN]: autoLogin
});

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (token) => {
  if (token !== null) {
    const { api } = apiTampan;
    api.setHeader('Authorization', `Bearer ${token}`);
    return true
  }
  return false;
};

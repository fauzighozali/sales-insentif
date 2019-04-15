import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  locationChange: ['location'],
  getLocationRequest: null,
  getLocationFailure: ['message'],
  getLocationActiveRequest: null,
  getLocationActiveSuccess: ['locationActive'],
  getLocationActiveFailure: ['message']
});

export const AppTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  location: null,
  locationActive: null
});

/* ------------- Reducers ------------- */

export const getLocationRequest = (state) => {
  return Object.assign({}, state, { fetching: true, error: null, message: null })
};

export const locationChange = (state, action) => {
  const { location } = action;
  return Object.assign({}, state, { fetching: false, error: false, message: null, location })
};

export const getLocationFailure = (state, action) => {
  const { message } = action;
  return Object.assign({}, state, { fetching: false, error: true, message })
};

export const getLocationActiveRequest = (state) => {
  return Object.assign({}, state, { fetching: true, error: null, message: null })
};

export const getLocationActiveSuccess = (state, actions) => {
  const { locationActive } = actions;
  return Object.assign({}, state, { fetching: false, error: false, message: null, locationActive })
};

export const getLocationActiveFailure = (state) => {
  return Object.assign({}, state, { fetching: true, error: null, message: null })
};


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOCATION_CHANGE]: locationChange,
  [Types.GET_LOCATION_REQUEST]: getLocationRequest,
  [Types.GET_LOCATION_FAILURE]: getLocationFailure,
  [Types.GET_LOCATION_ACTIVE_REQUEST]: getLocationActiveRequest,
  [Types.GET_LOCATION_ACTIVE_SUCCESS]: getLocationActiveSuccess,
  [Types.GET_LOCATION_ACTIVE_FAILURE]: getLocationActiveFailure
});




import { call, put, select } from 'redux-saga/effects'
import request from '../../Services/request'
import TaskInActions from '../../Redux/Task'
import { api as apiTampan } from './../index'

export const taskSaga = function* (api, action) {
  const data = action.payload;
  yield put(TaskInActions.taskSuccess(data));
};

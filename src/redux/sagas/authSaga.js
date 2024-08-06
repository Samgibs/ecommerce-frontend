import { takeLatest, call, put } from 'redux-saga/effects';
import axiosInstance from '../../axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/authActions';

function* loginUserSaga(action) {
  try {
    const response = yield call(axiosInstance.post, '/api/auth/login/', action.payload);
    const token = response.data.access;
    if (token) {
      console.log('Token received:', token);
      localStorage.setItem('token', token);
      localStorage.setItem('refresh', response.data.refresh);
      console.log('Token stored in localStorage:', localStorage.getItem('token'));
    }
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    yield put({ type: LOGIN_FAILURE, payload: error.message });
  }
}

function* registerUserSaga(action) {
  try {
    const response = yield call(axiosInstance.post, '/api/auth/register/', action.payload);
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('refresh', response.data.refresh);
    }
    yield put({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, payload: error.message });
  }
}

function* logoutUserSaga() {
  try {
    const refreshToken = localStorage.getItem('refresh');
    if (!refreshToken) {
      throw new Error('Refresh token is missing');
    }
    yield call(axiosInstance.post, '/api/auth/logout/', { refresh: refreshToken });
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: error.message });
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginUserSaga);
  yield takeLatest(REGISTER_REQUEST, registerUserSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutUserSaga);
}

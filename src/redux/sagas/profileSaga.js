import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../axios';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL } from '../constants/profileConstants';

function* fetchProfile() {
  try {
    const { data } = yield call(axios.get, '/api/auth/profile/');
    yield put({ type: PROFILE_SUCCESS, payload: data });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Please log in.');
      // Optionally handle logout or token refresh logic here
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    } else {
      yield put({
        type: PROFILE_FAIL,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      });
    }
  }
}

export default function* profileSaga() {
  yield takeEvery(PROFILE_REQUEST, fetchProfile);
}

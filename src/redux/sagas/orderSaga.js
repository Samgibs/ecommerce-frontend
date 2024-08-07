import { takeLatest, put, call } from 'redux-saga/effects';
import axiosInstance from '../../axios';
import {
  FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE,
  ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAILURE,
  CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CANCEL_ORDER_FAILURE,
} from '../actions/orderActions';

function* fetchOrders() {
  try {
    const response = yield call(axiosInstance.get, '/api/orders/');
    yield put({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ORDERS_FAILURE, payload: error.message });
  }
}

function* addOrder(action) {
  try {
    const response = yield call(axiosInstance.post, '/api/orders/', action.payload);
    yield put({ type: ADD_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_ORDER_FAILURE, payload: error.message });
  }
}

function* updateOrder(action) {
  try {
    const { id, data } = action.payload;
    const response = yield call(axiosInstance.put, `/api/orders/${id}/`, data);
    yield put({ type: UPDATE_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_ORDER_FAILURE, payload: error.message });
  }
}

function* confirmOrder(action) {
  try {
    const response = yield call(axiosInstance.post, `/api/orders/${action.payload}/confirm/`);
    yield put({ type: CONFIRM_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CONFIRM_ORDER_FAILURE, payload: error.message });
  }
}

function* cancelOrder(action) {
  try {
    const response = yield call(axiosInstance.post, `/api/orders/${action.payload}/cancel/`);
    yield put({ type: CANCEL_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CANCEL_ORDER_FAILURE, payload: error.message });
  }
}

export function* orderSaga() {
  yield takeLatest(FETCH_ORDERS_REQUEST, fetchOrders);
  yield takeLatest(ADD_ORDER_REQUEST, addOrder);
  yield takeLatest(UPDATE_ORDER_REQUEST, updateOrder);
  yield takeLatest(CONFIRM_ORDER_REQUEST, confirmOrder);
  yield takeLatest(CANCEL_ORDER_REQUEST, cancelOrder);
}
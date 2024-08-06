import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailure, FETCH_PRODUCT, fetchProductSuccess, fetchProductFailure } from '../actions/productActions';
import axiosInstance from '../../axios';

function* fetchProducts() {
  try {
    const response = yield call(axiosInstance.get, '/api/products');
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.detail
      ? error.response.data.detail
      : 'Network error';
    yield put(fetchProductsFailure(errorMessage));
  }
}

function* fetchProduct(action) {
  try {
    const response = yield call(axiosInstance.get, `/api/products/${action.payload}`);
    yield put(fetchProductSuccess(response.data));
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.detail
      ? error.response.data.detail
      : 'Network error';
    yield put(fetchProductFailure(errorMessage));
  }
}

export function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
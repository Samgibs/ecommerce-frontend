import { all } from 'redux-saga/effects';
import { watchAuth } from './authSaga'; 
import { productSaga } from './productSaga';
import { cartSaga } from './cartSaga';
import profileSaga from './profileSaga';
import { orderSaga } from './orderSaga';

export default function* rootSaga() {
  yield all([
    watchAuth(),
    productSaga(),
    cartSaga(),
    profileSaga(),
    orderSaga(),
  ]);
}

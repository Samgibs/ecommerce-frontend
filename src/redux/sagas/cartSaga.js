import { takeLatest, put, call, all } from 'redux-saga/effects';
import axiosInstance from '../../axios';
import {
  ADD_TO_CART_REQUEST, addToCartSuccess, addToCartFailure,
  UPDATE_CART_ITEM_REQUEST, updateCartItemSuccess, updateCartItemFailure,
  REMOVE_CART_ITEM_REQUEST, removeCartItemSuccess, removeCartItemFailure,
} from '../actions/cartActions';

function* addToCart(action) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User is not logged in');
    }
    
    console.log('Adding to cart payload:', action.payload); 
    
    const response = yield call(axiosInstance.post, '/api/cart/add/', action.payload, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    yield put(addToCartSuccess(response.data));
  } catch (error) {
    console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    yield put(addToCartFailure(error.response ? error.response.data : error.message));
  }
}


function* updateCartItem(action) {
  try {
    const { product_id, quantity } = action.payload;
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User is not logged in');
    }
    const response = yield call(axiosInstance.put, `/api/cart/update/${product_id}/`, { quantity }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    yield put(updateCartItemSuccess(response.data));
  } catch (error) {
    console.error('Error updating cart item:', error.response ? error.response.data : error.message);
    yield put(updateCartItemFailure(error.response ? error.response.data : error.message));
  }
}

function* removeCartItem(action) {
  try {
    const { product_id } = action.payload;
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User is not logged in');
    }
    yield call(axiosInstance.delete, `/api/cart/remove/${product_id}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    yield put(removeCartItemSuccess(product_id));
  } catch (error) {
    console.error('Error removing cart item:', error.response ? error.response.data : error.message);
    yield put(removeCartItemFailure(error.response ? error.response.data : error.message));
  }
}


export function* cartSaga() {
  yield all([
    takeLatest(ADD_TO_CART_REQUEST, addToCart),
    takeLatest(UPDATE_CART_ITEM_REQUEST, updateCartItem),
    takeLatest(REMOVE_CART_ITEM_REQUEST, removeCartItem),
  ]);
}


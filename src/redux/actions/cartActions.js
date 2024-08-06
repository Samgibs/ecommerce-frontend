export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export const UPDATE_CART_ITEM_FAILURE = 'UPDATE_CART_ITEM_FAILURE';

export const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST';
export const REMOVE_CART_ITEM_SUCCESS = 'REMOVE_CART_ITEM_SUCCESS';
export const REMOVE_CART_ITEM_FAILURE = 'REMOVE_CART_ITEM_FAILURE';

export const addToCartRequest = (payload) => ({
  type: ADD_TO_CART_REQUEST,
  payload,
});
export const addToCartSuccess = (data) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: data,
});
export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});

export const updateCartItemRequest = (payload) => ({
  type: UPDATE_CART_ITEM_REQUEST,
  payload,
});
export const updateCartItemSuccess = (data) => ({
  type: UPDATE_CART_ITEM_SUCCESS,
  payload: data,
});
export const updateCartItemFailure = (error) => ({
  type: UPDATE_CART_ITEM_FAILURE,
  payload: error,
});

export const removeCartItemRequest = (product_id) => ({
  type: REMOVE_CART_ITEM_REQUEST,
  payload: { product_id }
});

export const removeCartItemSuccess = (product_id) => ({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: { product_id }
});

export const removeCartItemFailure = (error) => ({
  type: REMOVE_CART_ITEM_FAILURE,
  payload: { error }
});


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export const UPDATE_CART_ITEM_FAILURE = 'UPDATE_CART_ITEM_FAILURE';

export const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST';
export const REMOVE_CART_ITEM_SUCCESS = 'REMOVE_CART_ITEM_SUCCESS';
export const REMOVE_CART_ITEM_FAILURE = 'REMOVE_CART_ITEM_FAILURE';

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const addToCartRequest = (product_id, quantity) => ({
  type: ADD_TO_CART_REQUEST,
  payload: { product_id, quantity }
});

export const addToCartSuccess = (cart) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: cart
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error
});

export const updateCartItemRequest = (product_id, quantity) => ({
  type: UPDATE_CART_ITEM_REQUEST,
  payload: { product_id, quantity }
});

export const updateCartItemSuccess = (cart) => ({
  type: UPDATE_CART_ITEM_SUCCESS,
  payload: cart
});

export const updateCartItemFailure = (error) => ({
  type: UPDATE_CART_ITEM_FAILURE,
  payload: error
});

export const removeCartItemRequest = (product_id) => ({
  type: REMOVE_CART_ITEM_REQUEST,
  payload: product_id
});

export const removeCartItemSuccess = (product_id) => ({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: product_id
});

export const removeCartItemFailure = (error) => ({
  type: REMOVE_CART_ITEM_FAILURE,
  payload: error
});

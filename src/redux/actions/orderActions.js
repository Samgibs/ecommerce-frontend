export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const ADD_ORDER_REQUEST = 'ADD_ORDER_REQUEST';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAILURE = 'ADD_ORDER_FAILURE';

export const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAILURE = 'UPDATE_ORDER_FAILURE';

export const CONFIRM_ORDER_REQUEST = 'CONFIRM_ORDER_REQUEST';
export const CONFIRM_ORDER_SUCCESS = 'CONFIRM_ORDER_SUCCESS';
export const CONFIRM_ORDER_FAILURE = 'CONFIRM_ORDER_FAILURE';

export const CANCEL_ORDER_REQUEST = 'CANCEL_ORDER_REQUEST';
export const CANCEL_ORDER_SUCCESS = 'CANCEL_ORDER_SUCCESS';
export const CANCEL_ORDER_FAILURE = 'CANCEL_ORDER_FAILURE';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const addOrderRequest = (orderData) => ({
  type: ADD_ORDER_REQUEST,
  payload: orderData,
});

export const updateOrderRequest = (id, data) => ({
  type: UPDATE_ORDER_REQUEST,
  payload: { id, data },
});

export const confirmOrderRequest = (orderId) => ({
  type: CONFIRM_ORDER_REQUEST,
  payload: orderId,
});

export const confirmOrderSuccess = (order) => ({
  type: CONFIRM_ORDER_SUCCESS,
  payload: order,
});

export const confirmOrderFailure = (error) => ({
  type: CONFIRM_ORDER_FAILURE,
  payload: error,
});

export const cancelOrderRequest = (orderId) => ({
  type: CANCEL_ORDER_REQUEST,
  payload: orderId,
});

export const cancelOrderSuccess = (order) => ({
  type: CANCEL_ORDER_SUCCESS,
  payload: order,
});

export const cancelOrderFailure = (error) => ({
  type: CANCEL_ORDER_FAILURE,
  payload: error,
});
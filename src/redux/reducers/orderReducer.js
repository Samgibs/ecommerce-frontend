const initialState = {
  orders: [],
  loading: false,
  error: null,
  message: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_ORDERS_SUCCESS':
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case 'FETCH_ORDERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'ADD_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        orders: [...state.orders, action.payload],
        message: 'Order added successfully',
      };
    case 'ADD_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'UPDATE_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        orders: state.orders.map(order =>
          order.id === action.payload.id ? action.payload : order
        ),
        message: 'Order updated successfully',
      };
    case 'UPDATE_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
import {
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
  UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,
} from '../actions/cartActions';

const initialState = {
  items: [],
  total_price: 0,
  loading: false,
  error: null,
  message: '' 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_TO_CART_SUCCESS:
      return { 
        ...state, 
        items: action.payload.items, 
        total_price: action.payload.total_price, 
        loading: false,
        message: 'Item added successfully!' 
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return { 
        ...state, 
        items: action.payload.items, 
        total_price: action.payload.total_price, 
        loading: false,
        message: 'Item updated successfully!' 
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return { 
        ...state, 
        items: state.items.filter(item => item.product.id !== action.payload), 
        loading: false,
        message: 'Item removed successfully!'
      };
    case ADD_TO_CART_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartReducer;

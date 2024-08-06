import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from '../actions/productActions';

const initialState = {
  products: [],
  product: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

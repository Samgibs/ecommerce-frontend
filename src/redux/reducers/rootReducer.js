import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import profileReducer from './profileReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  profile: profileReducer,
  order: orderReducer,
});

export default rootReducer;
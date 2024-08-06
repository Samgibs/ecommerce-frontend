import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  profile: profileReducer
});

export default rootReducer;

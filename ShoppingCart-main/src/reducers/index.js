import { combineReducers } from 'redux';
import loginReducer from './login';
import productData from './productData';
import cartData from './cartData';

const rootReducer = combineReducers({
 loginReducer,
 productData,
 cartData
})

export default rootReducer;
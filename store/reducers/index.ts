import categoriesReducer from './categories';
import {combineReducers} from 'redux';
import purchasesReducer from './purchases'

export default combineReducers({categoriesReducer, purchasesReducer});

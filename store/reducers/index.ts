import categoriesReducer from './categories';
import purchasesReducer from './purchases';
import settingsReducer from './settings';
import {combineReducers} from 'redux';


export default combineReducers({categoriesReducer, purchasesReducer, settingsReducer});

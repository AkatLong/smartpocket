import {PurchasesState, PurchasesActionTypes} from '../types';
import {
  ADD_PURCHASE,
  EDIT_PURCHASE,
  REMOVE_PURCHASE,
} from '../actions/actionTypes';

const initialState: PurchasesState = {
  purchases: [],
};

export default function categoriesReducer(
  state = initialState,
  action: PurchasesActionTypes,
) {
  switch (action.type) {
    case ADD_PURCHASE: {
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    }
    case EDIT_PURCHASE: {
      return {
        ...state,
        purchases: state.purchases.map(p =>
          p.id === action.payload.id ? action.payload : p,
        ),
      };
    }
    case REMOVE_PURCHASE: {
      return {
        ...state,
        purchases: state.purchases.filter(p => p.id !== action.payload),
      };
    }
    default:
      return state;
  }
}

import {CategoriesActionTypes, CategoriesState} from '../types';
import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
} from '../actions/actionTypes';

const initialState: CategoriesState = {
  categories: [],
};

export default function categoriesReducer(
  state = initialState,
  action: CategoriesActionTypes,
) {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    }
    case EDIT_CATEGORY: {
      return {
        ...state,
        categories: state.categories.map(c =>
          c.id === action.payload.id ? action.payload : c,
        ),
      };
    }
    case REMOVE_CATEGORY: {
      return {
        ...state,
        categories: state.categories.filter(c => c.id !== action.payload),
      };
    }
    default:
      return state;
  }
}

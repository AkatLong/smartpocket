import { CategoriesActionTypes, CategoriesState} from '../types';
import { ADD_CATEGORY } from '../actions/actionTypes';

const initialState: CategoriesState = {
  categories: [],
};

export default function categoriesReducer(
  state = initialState,
  action: CategoriesActionTypes,
) {
  switch (action.type) {
    case ADD_CATEGORY: {
      console.log(action.payload)
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    }
    default: return state
  }
}

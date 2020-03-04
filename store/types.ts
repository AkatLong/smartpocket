import {ADD_CATEGORY} from './actions/actionTypes';

export type Category = {
  id: string;
  name: string;
  timestamp: number;
};

export type CategoriesState = {
  categories: Category[];
};

export type RootState = {
  categoriesReducer: CategoriesState;
};

type AddCategoryAction = {
  type: typeof ADD_CATEGORY;
  payload: Category;
};

export type CategoriesActionTypes = AddCategoryAction;

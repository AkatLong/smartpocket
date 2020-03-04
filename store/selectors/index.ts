import {createSelector} from 'reselect';
import {CategoriesState} from '../types';

const getCategories = (state: CategoriesState) => state.categories;

const getCategoryById = (state: CategoriesState, id: string) => id;

export const selectAllCategories = createSelector(
  [getCategories],
  categories => categories,
);

export const selectCategtoryById = createSelector(
  [getCategories, getCategoryById],
  (categories, id) => categories.filter(c => c.id === id)[0],
);

import {createSelector} from 'reselect';
import {CategoriesState, PurchasesState} from '../types';

const getCategories = (state: CategoriesState) => state.categories;
const getPurchases = (state: PurchasesState) => state.purchases;

const getCategoryById = (state: CategoriesState, id: string) => id;
const getPurchaseById = (state: PurchasesState, id: string) => id;

export const selectAllCategories = createSelector(
  [getCategories],
  categories => categories,
);

export const selectAllPurchases = createSelector(
  [getPurchases],
  purchases => purchases,
);

export const selectCategtoryById = createSelector(
  [getCategories, getCategoryById],
  (categories, id) => categories.find(c => c.id === id),
);

export const selectPurchaseById = createSelector(
  [getPurchases, getPurchaseById],
  (purchases, id) => purchases.find(p => p.id === id),
);

export const selectPurchasesByCategoryId = createSelector(
  [getPurchases, getCategoryById],
  (purchases, id) => purchases.filter(p => p.categoryId === id),
);

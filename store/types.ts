import {
  ADD_CATEGORY,
  ADD_PURCHASE,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_PURCHASE,
  REMOVE_PURCHASE,
} from './actions/actionTypes';

export type Category = {
  id: string;
  name: string;
  timestamp: number;
};

export type Purchase = {
  id: string;
  timestamp: number;
  sum: number;
  categoryId: string;
};

export type CategoriesState = {
  categories: Category[];
};

type AddCategoryAction = {
  type: typeof ADD_CATEGORY;
  payload: Category;
};

type EditCategoryAction = {
  type: typeof EDIT_CATEGORY;
  payload: Category;
};

type RemoveCategoryAction = {
  type: typeof REMOVE_CATEGORY;
  payload: string;
};

export type CategoriesActionTypes =
  | AddCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction;

export type PurchasesState = {
  purchases: Purchase[];
};

type AddPurchaseAction = {
  type: typeof ADD_PURCHASE;
  payload: Purchase;
};

type EditPurchaseAction = {
  type: typeof EDIT_PURCHASE
  payload:Purchase
}

type RemovePurchaseAction ={
  type: typeof REMOVE_PURCHASE
  payload:string;
}

export type PurchasesActionTypes = AddPurchaseAction | EditPurchaseAction | RemovePurchaseAction;

export type RootState = {
  categoriesReducer: CategoriesState;
  purchasesReducer: PurchasesState;
};

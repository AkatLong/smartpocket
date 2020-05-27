import {
  ADD_CATEGORY,
  ADD_PURCHASE,
  EDIT_CATEGORY,
  REMOVE_CATEGORIES,
  EDIT_PURCHASE,
  REMOVE_PURCHASE,
  CHANGE_THEME,
} from './actions/actionTypes';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';


export type Category = {
  id: string;
  name: string;
  timestamp: number;
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
  type: typeof REMOVE_CATEGORIES;
  payload: string[];
};

export type CategoriesActionTypes =
  | AddCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction;

export type Purchase = {
  id: string;
  timestamp: number;
  sum: number;
  categoryId: string;
};

export type PurchasesState = {
  purchases: Purchase[];
};

type AddPurchaseAction = {
  type: typeof ADD_PURCHASE;
  payload: Purchase;
};

type EditPurchaseAction = {
  type: typeof EDIT_PURCHASE
  payload: Purchase
}

type RemovePurchaseAction = {
  type: typeof REMOVE_PURCHASE
  payload: string;
}

export type PurchasesActionTypes =
  | AddPurchaseAction
  | EditPurchaseAction
  | RemovePurchaseAction;

export enum Theme {
  Light,
  Dark
}

export type Style = {
  label: StyleProp<TextStyle>
  view: StyleProp<ViewStyle>
  headerBackground: StyleProp<ViewStyle>
  headerTextColor: string
  headerBackgroundColor:string
}

export type SettingsState = {
  theme: Theme,
  styles: Style
}

type ChangeThemeAction = {
  type: typeof CHANGE_THEME
  payload: Theme
}

export type SettingsActionTypes = ChangeThemeAction

export type RootState = {
  categoriesReducer: CategoriesState;
  purchasesReducer: PurchasesState;
  settingsReducer: SettingsState
};

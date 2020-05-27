import { Category, CategoriesActionTypes } from '../types';
import { ADD_CATEGORY, REMOVE_CATEGORIES, EDIT_CATEGORY } from './actionTypes';
import UUIDGenerator from 'react-native-uuid-generator';
import { ThunkDispatch } from 'redux-thunk';

export const addCategory = (name: string) => (dispatch: ThunkDispatch<{}, {}, CategoriesActionTypes>) => {
  UUIDGenerator.getRandomUUID().then(id => {
    dispatch({
      type: ADD_CATEGORY,
      payload: {
        id,
        name,
        timestamp: Date.now(),
        purchases: []
      },
    });
  })
};

export const editCategory = (newCategory: Category) => ({
  type: EDIT_CATEGORY,
  payload: newCategory
})

export const removeCategories = (ids: string[]) => ({
  type: REMOVE_CATEGORIES,
  payload: ids
})

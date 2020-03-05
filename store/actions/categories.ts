import {CategoriesActionTypes, Category} from '../types';
import {ADD_CATEGORY, REMOVE_CATEGORY, EDIT_CATEGORY} from './actionTypes';
import UUIDGenerator from 'react-native-uuid-generator';
import {ThunkDispatch} from 'redux-thunk';

export const addCategory = (name: string) => {
  return (dispatch: ThunkDispatch<{}, {}, CategoriesActionTypes>) => {
    UUIDGenerator.getRandomUUID().then(id => {
      dispatch({
        type: ADD_CATEGORY,
        payload: {
          id,
          name,
          timestamp: Date.now(),
          purchases:[]
        },
      });
    });
  };
};

export const editCategory = (newCategory: Category)=>{
  return {
    type:EDIT_CATEGORY,
    payload: newCategory
  }
}

export const removeCategory = (id: string) => {
  return {
    type:REMOVE_CATEGORY,
    payload: id
  }
}

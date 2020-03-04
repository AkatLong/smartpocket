import {CategoriesActionTypes} from '../types';
import {ADD_CATEGORY} from './actionTypes';
import UUIDGenerator from 'react-native-uuid-generator';
import { ThunkDispatch } from 'redux-thunk';

export function addCategory(name: string) {
  return (dispatch:ThunkDispatch<{},{}, CategoriesActionTypes>) => {
    UUIDGenerator.getRandomUUID().then(id => {
      dispatch({
        type: ADD_CATEGORY,
        payload: {
          id,
          name,
          timestamp: Date.now(),
        },
      });
    });
  };
}

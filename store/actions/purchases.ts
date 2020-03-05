import {PurchasesActionTypes, Purchase} from '../types';
import {ADD_PURCHASE, EDIT_PURCHASE, REMOVE_PURCHASE} from './actionTypes';
import UUIDGenerator from 'react-native-uuid-generator';
import {ThunkDispatch} from 'redux-thunk';

export const addPurchase = (sum: number, categoryId: string) => {
  return (dispatch: ThunkDispatch<{}, {}, PurchasesActionTypes>) => {
    UUIDGenerator.getRandomUUID().then(id => {
      dispatch({
        type: ADD_PURCHASE,
        payload: {
          id,
          sum,
          categoryId,
          timestamp: Date.now(),
        },
      });
    });
  };
};

export const editPurchase = (newPurchase: Purchase)=>{
  return {
    type:EDIT_PURCHASE,
    payload: newPurchase
  }
}

export const removePurchase = (id: string) => {
  return {
    type:REMOVE_PURCHASE,
    payload: id
  }
}

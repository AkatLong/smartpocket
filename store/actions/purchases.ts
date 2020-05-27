import {Purchase, PurchasesActionTypes} from '../types';
import {ADD_PURCHASE, EDIT_PURCHASE, REMOVE_PURCHASE} from './actionTypes';
import UUIDGenerator from 'react-native-uuid-generator';
import {ThunkDispatch} from 'redux-thunk';

export const addPurchase = (sum: number, categoryId: string) => (dispatch: ThunkDispatch<{}, {}, PurchasesActionTypes>) => {
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

export const editPurchase = (newPurchase: Purchase)=>({
  type: EDIT_PURCHASE,
  payload: newPurchase
})

export const removePurchase = (id: string) => ({
  type: REMOVE_PURCHASE,
  payload: id
})

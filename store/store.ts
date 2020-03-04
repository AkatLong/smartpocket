import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../store/reducers/index';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { coreApiSlice } from './slices/coreApiSlice';
import userSlice from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { configure } from '@testing-library/react';

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: autoMergeLevel2,
// }

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  [coreApiSlice.reducerPath]: coreApiSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(
    {
      serializableCheck: false,
    }
  ),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;

// export const persistor = persistStore(configureStore);
export type RootState = ReturnType<typeof store.getState>;
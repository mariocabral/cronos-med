import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import SidebarReducer from './sidebar/sidebarReducer';
import logger from 'redux-logger';
import thunk from "redux-thunk"


export const store = configureStore({
  reducer: {
    sideBar: SidebarReducer,
  },
  middleware: [thunk, logger],
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

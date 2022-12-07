import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import SidebarReducer from './reducers/sidebarReducer';
import ConfigurationReducer  from './reducers/configReducer';
import logger from 'redux-logger';
import thunk from "redux-thunk"
import profesionalReducer from './reducers/profesionalReducer';
import roomReducer from './reducers/roomReducer';


export const store = configureStore({
  reducer: {
    sideBar: SidebarReducer,
    config: ConfigurationReducer,
    profesional: profesionalReducer,
    room: roomReducer,
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

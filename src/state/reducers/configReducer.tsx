import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { ConfigurationState } from '../models/ConfigurationState';


const initialState: ConfigurationState = {
    baseBackendUrl: 'http://127.0.0.1:8000',
};


export const configurationSlice = createSlice({
    name: 'config',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateBaseBackendUrl: (state, action: PayloadAction<String>) => {
        state.baseBackendUrl = action.payload;
      },
    },
  });
  

  export const { updateBaseBackendUrl } = configurationSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectConfig = (state: RootState) => state.config;
  

  export default configurationSlice.reducer;
  


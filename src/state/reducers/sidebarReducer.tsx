import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { SidebarState } from '../models/SidebarState';

const initialState: SidebarState = {
    sidebarUnfoldable: false,
    sidebarShow: true,
};


export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateSidebarShow: (state, action: PayloadAction<boolean>) => {
        state.sidebarShow = action.payload;
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      updateSidebarUnfoldable: (state, action: PayloadAction<boolean>) => {
        state.sidebarUnfoldable = action.payload;
      },
    },
  });
  

  export const { updateSidebarShow, updateSidebarUnfoldable } = sidebarSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectSidebarShow = (state: RootState) => state.sideBar;
  

  export default sidebarSlice.reducer;
  


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfesionalResponse } from '../../apis/models';
import { ProfesionalState, Operations } from '../models/ProfesionalState';
import { RootState } from '../Store';



const initialState: ProfesionalState = {
  profesionals: new Array(),
  currentProfesional: undefined,
  showProfesionalModal: false,
  showProfesionalDeleteModal: false,
  modalOperation: Operations.NONE,
};


export const profesionalSlice = createSlice({
    name: 'profesional',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateProfesionalList: (state, action: PayloadAction<Array<ProfesionalResponse>>) => {
        state.profesionals = action.payload;
      },
      setCurrentProfesional: (state, action: PayloadAction<ProfesionalResponse | undefined>) => {
        state.currentProfesional = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showProfesionalModal: (state, action: PayloadAction<boolean>) => {
        console.log('update profesional modal show: ' + action.payload);
        state.showProfesionalModal = action.payload;
      },
      showProfesionalDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('update profesional delete modal show: ' + action.payload);
        state.showProfesionalDeleteModal = action.payload;
      },
    },
  });
  

  export const { updateProfesionalList, showProfesionalModal, showProfesionalDeleteModal, setCurrentProfesional, setModalOperation } = profesionalSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectProfesional = (state: RootState) => state.profesional;
  

  export default profesionalSlice.reducer;
  


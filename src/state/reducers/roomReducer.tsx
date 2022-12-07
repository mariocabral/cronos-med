import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomResponse } from '../../apis/models';
import { RoomState, Operations } from '../models/RoomState';
import { RootState } from '../Store';



const initialState: RoomState = {
  rooms: new Array(),
  currentRoom: undefined,
  showRoomModal: false,
  showRoomDeleteModal: false,
  modalOperation: Operations.NONE,
  search: undefined
};


export const roomSlice = createSlice({
    name: 'room',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateRoomList: (state, action: PayloadAction<Array<RoomResponse>>) => {
        state.rooms = action.payload;
      },
      setCurrentRoom: (state, action: PayloadAction<RoomResponse | undefined>) => {
        state.currentRoom = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showRoomModal: (state, action: PayloadAction<boolean>) => {
        console.log('update room modal show: ' + action.payload);
        state.showRoomModal = action.payload;
      },
      showRoomDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('update room delete modal show: ' + action.payload);
        state.showRoomDeleteModal = action.payload;
      },
      updateSearch: (state, action: PayloadAction<String | undefined> ) => {
        console.log('search room value: ' + action.payload);
        state.search = action.payload;
      },
    },
  });
  

  export const { updateRoomList, showRoomModal, showRoomDeleteModal, setCurrentRoom, setModalOperation, updateSearch } = roomSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectRoom = (state: RootState) => state.room;
  

  export default roomSlice.reducer;
  


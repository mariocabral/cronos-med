
import { RoomResponse } from "../../apis/models"

export enum Operations {
  NONE, ADD_ROOM, SHOW_ROOM, EDIT_ROOM, DELETE_ROOM
}

export interface RoomState {
    rooms: Array<RoomResponse>,
    currentRoom?: RoomResponse,
    showRoomModal: boolean,
    showRoomDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }

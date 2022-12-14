import React from 'react';
import { RoomRequest } from '../apis/models';
import { RoomsApi } from '../apis/rooms-api';
import { ConfigurationState } from '../state/models/ConfigurationState';
import { selectConfig } from '../state/reducers/configReducer';
import { updateRoomList } from '../state/reducers/roomReducer';
import { AppDispatch } from '../state/Store';
import { useAppSelector, useAppDispatch } from '../state/hooks';


export class RoomService {
    
    dispatch: AppDispatch;
    configState : ConfigurationState;
    roomsApi: RoomsApi;

    constructor() {
        this.dispatch = useAppDispatch();
        this.configState = useAppSelector(selectConfig);
        this.roomsApi = new RoomsApi({basePath : this.configState.baseBackendUrl.toString()})
    }

    loadAllRooms(search? :String) {
        console.log("Loading rooms with search critera '{}'", search)
        this.roomsApi.getRoomsAll(search?.toString())
                                .then((response) => this.dispatch(updateRoomList(response.data)))
                                .catch(() => this.dispatch(updateRoomList(new Array())))
                                .finally(() => console.log("Load rooms service constructor done."))
    }

    createRoom(room: RoomRequest) {
        console.log("create a room {}", room)
        this.roomsApi.postRooms(room)
                                .then((response) => console.log("room created {}", response))
                                .catch((err) => console.log(err))
                                .finally(() => console.log("Create room service constructor done."))
    }

    updateRoom(id: string, room: RoomRequest) {
        console.log("update a room {}", room)
        room.roomId = id;
        this.roomsApi.putRoomsId(id, room)
                                .then((response) => console.log("room updated {}", response))
                                .catch((err) => console.log(err))
                                .finally(() => console.log("Update room service constructor done."))
    }
    
    deleteRoom(id: string) {
        console.log("delete a room {}", id)
        this.roomsApi.deleteRoomsId(id)
                                .then((response) => console.log("room deleted {}", response))
                                .catch((err) => console.log(err))
                                .finally(() => console.log("Delete room service constructor done."))
    }
}


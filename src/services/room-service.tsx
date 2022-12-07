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
        console.log("Loading profesionals with search critera '{}'", search)
        this.roomsApi.getRoomsAll(search?.toString())
                                .then((response) => this.dispatch(updateRoomList(response.data)))
                                .catch(() => this.dispatch(updateRoomList(new Array())))
                                .finally(() => console.log("Load rooms service constructor done."))
    }

    
}


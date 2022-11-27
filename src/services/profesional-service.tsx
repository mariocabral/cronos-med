import React from 'react';
import { ProfesionalRequest } from '../apis/models';
import { ProfesionalApi } from '../apis/profesional-api';
import { ConfigurationState } from '../state/models/ConfigurationState';
import { selectConfig } from '../state/reducers/configReducer';
import { updateProfesionalList } from '../state/reducers/profesionalReducer';
import { AppDispatch } from '../state/Store';
import { useAppSelector, useAppDispatch } from './../state/hooks';


export class ProfesionalService {
    
    dispatch: AppDispatch;
    configState : ConfigurationState;
    profesionalApi: ProfesionalApi;

    constructor() {
        this.dispatch = useAppDispatch();
        this.configState = useAppSelector(selectConfig);
        this.profesionalApi = new ProfesionalApi({basePath : this.configState.baseBackendUrl.toString()})
    }

    loadAllProfesionals() {
        console.log("Loading all profesionals")
        this.profesionalApi.getProfesionalAll()
                                .then((response) => this.dispatch(updateProfesionalList(response.data)))
                                .catch(() => this.dispatch(updateProfesionalList(new Array())))
                                .finally(() => console.log("Init profesional service constructor done."))
    }

    createProfesional(profesional: ProfesionalRequest) {
        console.log("create a profesional {}", profesional)
        this.profesionalApi.postProfesional(profesional)
                                .then((response) => console.log("profesional created {}", response))
                                .catch(() => this.dispatch(updateProfesionalList(new Array())))
                                .finally(() => console.log("Init profesional service constructor done."))
    }

}



import { ProfesionalResponse } from "../../apis/models"

export enum Operations {
  NONE, ADD_PROFESIONAL, SHOW_PROFESIONAL, EDIT_PROFESIONAL, DELETE_PROFESIONAL
}

export interface ProfesionalState {
    profesionals: Array<ProfesionalResponse>,
    currentProfesional?: ProfesionalResponse,
    showProfesionalModal: boolean,
    modalOperation: Operations,
  }

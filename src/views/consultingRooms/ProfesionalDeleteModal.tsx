import React, { useState } from 'react';
import {
  CButton,
  CButtonGroup,
  CCol,
  CForm,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CCardTitle
} from '@coreui/react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectRoom, showRoomDeleteModal } from '../../state/reducers/roomReducer';
import { RoomService } from '../../services/room-service';
import { useTranslation } from "react-i18next";
import { Operations } from '../../state/models/RoomState';


const RoomDeleteModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const roomState = useAppSelector(selectRoom);
  const service = new RoomService();
  const {t} = useTranslation();
  
  const closeModal = () => {
    dispatch(showRoomDeleteModal(false))
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      if (roomState.modalOperation === Operations.DELETE_ROOM && roomState.currentRoom)
        service.deleteRoom(roomState.currentRoom.roomId);
      closeModal();
    }
  }

  let styleColor = { color: 'danger', textColor: 'dark' };
  
  return (
    <>
      <CModal color={styleColor.color} alignment="center" size="xl" visible={roomState.showRoomDeleteModal} onClose={closeModal}>
        <CModalHeader className="text-center">
          <CModalTitle>{t('views.room.modal.title.delete')}</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CCardTitle className="text-center">
              {t('views.room.modal.deleteDescription', {name: roomState.currentRoom?.name})}
            </CCardTitle>
            <p></p>
          <CForm className="row g-3 needs-validation" onSubmit={submitForm}>
            <CCol xs={12} className="align-self-end">
              <CButtonGroup>
                 <CButton color="danger" type="submit">
                  {t('views.room.modal.form.delete')}
                </CButton>
                <CButton color="success" onClick={closeModal}>
                  {t('views.room.modal.form.cancel')}
                </CButton>
              </CButtonGroup>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default RoomDeleteModal

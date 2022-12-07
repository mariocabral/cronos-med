import React, { useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CFormTextarea
} from '@coreui/react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectRoom, showRoomModal } from '../../state/reducers/roomReducer'
import { RoomService } from '../../services/room-service'
import { Operations } from '../../state/models/RoomState'
import { useTranslation } from "react-i18next";

const RoomModal: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const roomState = useAppSelector(selectRoom);
  var currentRoom = {
                      name: '',
                      description: '',
                      enabled: roomState.currentRoom ? roomState.currentRoom.enabled : true,
                    };
  
  const setName = (value: string) => {
    currentRoom.name = value;
  };
  const setDescripcion  = (value: string) => {
    currentRoom.description = value;
  };
  const setEnabled = (value: boolean | any) => {
    currentRoom.enabled = value;
  };

  const service = new RoomService();
  const closeModal = () => {
    dispatch(showRoomModal(false))
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      if (roomState.modalOperation === Operations.ADD_ROOM)
        service.createRoom(currentRoom);
      if (roomState.modalOperation === Operations.EDIT_ROOM &&
        roomState.currentRoom){
          currentRoom.name = currentRoom.name.length > 0 ? currentRoom.name : roomState.currentRoom.name;
          currentRoom.description = currentRoom.description.length > 0 ? currentRoom.description : roomState.currentRoom.description;
          service.updateRoom(roomState.currentRoom.roomId, currentRoom);
      }
        closeModal();
    }
  }

  let modalTitle = '';
  let styleColor = { color: 'danger', textColor: 'dark' };
  let readOnly = false;
  switch (roomState.modalOperation) {
    case Operations.ADD_ROOM:
      modalTitle = t("views.room.modal.title.add");
      styleColor = { color: 'danger', textColor: 'dark' };
      break;
    case Operations.EDIT_ROOM:
      modalTitle = t("views.room.modal.title.edit");
      break;
    case Operations.SHOW_ROOM:
      modalTitle = t("views.profesiroomonal.modal.title.show");
      readOnly = true;
      break;
  };

  return (
    <>
      <CModal color={styleColor.color} alignment="center" size="xl" visible={roomState.showRoomModal} onClose={closeModal}>
        <CModalHeader className="text-center">
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-3 needs-validation" onSubmit={submitForm}>
            <CCol md={12}>
              <CFormInput
                type="text"
                label={t("views.room.modal.form.name")}
                defaultValue={roomState.currentRoom?.name}
                onChange={(event)=>setName(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={6}>
              <CFormTextarea
                id="roomFormControlTextarea1"
                text={t("views.room.modal.form.descriptionText")}
                label={t("views.room.modal.form.description")}
                defaultValue={roomState.currentRoom?.description}
                onChange={(event)=>setDescripcion(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol xs={12} className="align-self-end">
              <CFormCheck
                type="checkbox"
                label={t('views.room.modal.form.enable')}
                defaultChecked={roomState.currentRoom?.enabled}
                onChange={(event) => setEnabled(event.target.checked)}
                required
                readOnly={readOnly}
              />
              <CButtonGroup>
                { !readOnly &&  
                 <CButton color="primary" type="submit">
                  {t('views.room.modal.form.submit')}
                </CButton>
                }
                <CButton color="danger" type="submit" onClick={closeModal}>
                  {t('views.room.modal.form.close')}
                </CButton>
              </CButtonGroup>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default RoomModal

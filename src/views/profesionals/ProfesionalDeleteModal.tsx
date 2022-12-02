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
  CCardTitle
} from '@coreui/react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectProfesional, showProfesionalDeleteModal } from '../../state/reducers/profesionalReducer'
import { ProfesionalService } from '../../services/profesional-service'

const ProfesionalDeleteModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);
  const service = new ProfesionalService();
  
  const closeModal = () => {
    dispatch(showProfesionalDeleteModal(false))
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      if (profesionalState.currentProfesional)
        service.deleteProfesional(profesionalState.currentProfesional.profesionalId);
      closeModal();
    }
  }

  const modalTitle = 'Remove Profresional';
  let styleColor = { color: 'danger', textColor: 'dark' };
  
  return (
    <>
      <CModal color={styleColor.color} alignment="center" size="xl" visible={profesionalState.showProfesionalDeleteModal} onClose={closeModal}>
        <CModalHeader className="text-center">
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CCardTitle className="text-center">The profesional {profesionalState.currentProfesional?.lastName}, {profesionalState.currentProfesional?.firstName} will be delete.</CCardTitle>
            <p></p>
          <CForm className="row g-3 needs-validation" onSubmit={submitForm}>
            <CCol xs={12} className="align-self-end">
              <CButtonGroup>
                 <CButton color="danger" type="submit">
                  Delete
                </CButton>
                <CButton color="success" type="submit" onClick={closeModal}>
                  Cancel
                </CButton>
              </CButtonGroup>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default ProfesionalDeleteModal

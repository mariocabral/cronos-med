import React, { useState } from 'react'
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
} from '@coreui/react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectProfesional, showProfesionalDeleteModal } from '../../state/reducers/profesionalReducer'
import { ProfesionalService } from '../../services/profesional-service'
import { useTranslation } from "react-i18next";

const ProfesionalDeleteModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);
  const service = new ProfesionalService();
  const {t} = useTranslation();
  
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

  let styleColor = { color: 'danger', textColor: 'dark' };
  
  return (
    <>
      <CModal color={styleColor.color} alignment="center" size="xl" visible={profesionalState.showProfesionalDeleteModal} onClose={closeModal}>
        <CModalHeader className="text-center">
          <CModalTitle>{t('views.profesional.modal.title.delete')}</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CCardTitle className="text-center">
              {t('views.profesional.modal.delete_description', 
                  { lastName: profesionalState.currentProfesional?.lastName, 
                    firstName: profesionalState.currentProfesional?.firstName
                  })
              }</CCardTitle>
            <p></p>
          <CForm className="row g-3 needs-validation" onSubmit={submitForm}>
            <CCol xs={12} className="align-self-end">
              <CButtonGroup>
                 <CButton color="danger" type="submit">
                  {t('views.profesional.modal.form.delete')}
                </CButton>
                <CButton color="success" type="submit" onClick={closeModal}>
                  {t('views.profesional.modal.form.cancel')}
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

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
  CModalTitle
} from '@coreui/react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectProfesional, showProfesionalModal } from '../../state/reducers/profesionalReducer'
import { ProfesionalService } from '../../services/profesional-service'
import { Operations } from '../../state/models/ProfesionalState'
import { useTranslation } from "react-i18next";

const ProfesionalModal: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);
  var currentProfesional = {
                            firstName: '',
                            lastName: '',
                            licence: '',
                            degree: '',
                            email: '',
                            enabled: profesionalState.currentProfesional ? profesionalState.currentProfesional.enabled : true,
                            phones: ['','']
                          };
  
  const setFirstName = (value: string) => {
    currentProfesional.firstName = value;
  };
  const setLastName  = (value: string) => {
    currentProfesional.lastName = value;
  };
  const setDegree = (value: string) => {
    currentProfesional.degree = value;
  };
  const setLicence = (value: string) => {
    currentProfesional.licence = value;
  };
  const setPhone1 = (value: string) => {
    currentProfesional.phones[0] = value;
  };
  const setPhone2 = (value: string) => {
    currentProfesional.phones[1] = value;
  };
  const setEmail = (value: string) => {
    currentProfesional.email = value;
  };
  const setEnabled = (value: boolean | any) => {
    currentProfesional.enabled = value;
  };

  const service = new ProfesionalService();
  const closeModal = () => {
    dispatch(showProfesionalModal(false))
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      if (profesionalState.modalOperation === Operations.ADD_PROFESIONAL)
        service.createProfesional(currentProfesional);
      if (profesionalState.modalOperation === Operations.EDIT_PROFESIONAL &&
          profesionalState.currentProfesional){
        currentProfesional.firstName = currentProfesional.firstName.length > 0 ? currentProfesional.firstName : profesionalState.currentProfesional.firstName;
        currentProfesional.lastName = currentProfesional.lastName.length > 0 ? currentProfesional.lastName : profesionalState.currentProfesional.lastName;
        currentProfesional.degree = currentProfesional.degree.length > 0 ? currentProfesional.degree : profesionalState.currentProfesional.degree;
        currentProfesional.licence = currentProfesional.licence.length > 0 ? currentProfesional.licence : profesionalState.currentProfesional.licence;
        currentProfesional.email = currentProfesional.email.length > 0 ? currentProfesional.email : profesionalState.currentProfesional.email;
        currentProfesional.phones[0] = currentProfesional.phones[0].length > 0 ? currentProfesional.phones[0] : profesionalState.currentProfesional.phones[0];
        currentProfesional.phones[1] = currentProfesional.phones[1].length > 0 ? currentProfesional.phones[1] : profesionalState.currentProfesional.phones[1];
        service.updateProfesional(profesionalState.currentProfesional.profesionalId, currentProfesional);
      }
      closeModal();
    }
  }

  let modalTitle = '';
  let styleColor = { color: 'danger', textColor: 'dark' };
  let readOnly = false;
  switch (profesionalState.modalOperation) {
    case Operations.ADD_PROFESIONAL:
      modalTitle = t("views.profesional.modal.title.add");
      styleColor = { color: 'danger', textColor: 'dark' };
      break;
    case Operations.DELETE_PROFESIONAL:
      modalTitle = t("views.profesional.modal.title.delete");
      break;
    case Operations.EDIT_PROFESIONAL:
      modalTitle = t("views.profesional.modal.title.edit");
      break;
    case Operations.SHOW_PROFESIONAL:
      modalTitle = t("views.profesional.modal.title.show");
      readOnly = true;
      break;
  };

  return (
    <>
      <CModal color={styleColor.color} alignment="center" size="xl" visible={profesionalState.showProfesionalModal} onClose={closeModal}>
        <CModalHeader className="text-center">
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-3 needs-validation" onSubmit={submitForm}>
            <CCol md={6}>
              <CFormInput
                type="text"
                label={t("views.profesional.modal.form.name")}
                defaultValue={profesionalState.currentProfesional?.firstName}
                onChange={(event)=>setFirstName(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label={t("views.profesional.modal.form.last_name")}
                defaultValue={profesionalState.currentProfesional?.lastName}
                onChange={(event)=>setLastName(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label={t("views.profesional.modal.form.degree")}
                defaultValue={profesionalState.currentProfesional?.degree}
                onChange={(event)=>setDegree(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label={t('views.profesional.modal.form.licence')}
                defaultValue={profesionalState.currentProfesional?.licence}
                onChange={(event)=>setLicence(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>

            <CCol md={6}>
              <CFormInput
                type="text"
                label={t('views.profesional.modal.form.phone1')}
                defaultValue={profesionalState.currentProfesional?.phones[0]}
                onChange={(event)=>setPhone1(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label={t('views.profesional.modal.form.phone2')}
                defaultValue={profesionalState.currentProfesional?.phones[1]}
                onChange={(event)=>setPhone2(event.target.value)}
                readOnly={readOnly}
              />
            </CCol>
            <CCol md={12}>
              <CFormInput
                type="text"
                label={t('views.profesional.modal.form.email')}
                defaultValue={profesionalState.currentProfesional?.email}
                onChange={(event) => setEmail(event.target.value)}
                required
                readOnly={readOnly}
              />
            </CCol>
            <CCol xs={12} className="align-self-end">
              <CFormCheck
                type="checkbox"
                label={t('views.profesional.modal.form.enable')}
                defaultChecked={profesionalState.currentProfesional?.enabled}
                onChange={(event) => setEnabled(event.target.checked)}
                required
                readOnly={readOnly}
              />
              <CButtonGroup>
                { !readOnly &&  
                 <CButton color="primary" type="submit">
                  {t('views.profesional.modal.form.submit')}
                </CButton>
                }
                <CButton color="danger" type="submit" onClick={closeModal}>
                  {t('views.profesional.modal.form.close')}
                </CButton>
              </CButtonGroup>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default ProfesionalModal

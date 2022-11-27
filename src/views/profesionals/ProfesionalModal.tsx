import React, { useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectProfesional, showProfesionalModal } from '../../state/reducers/profesionalReducer'
import { ProfesionalService } from '../../services/profesional-service'
import { ProfesionalResponse } from '../../apis/models'
import { Operations } from '../../state/models/ProfesionalState'
import { de } from 'date-fns/locale'
import { ProfesionalRequest } from '../../apis/models';
import { StringValidation } from '../../utils/stringValidation'



const ProfesionalModal: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [degree, setDegree] = useState("");
  const [licence, setLicence] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [enabled, setEnabled] = useState(true);
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);
  const service = new ProfesionalService();
  const stringValidator = new StringValidation();

  const closeModal = () => {
    setValidated(false);
    setFirstName('');
    setLastName('');
    setDegree('');
    setLicence('');
    setPhone1('');
    setPhone2('');
    setEmail('');
    dispatch(showProfesionalModal(false))
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      service.createProfesional(
        {
          firstName: firstName,
          lastName: lastName,
          licence: licence,
          degree: degree,
          email: email,
          enabled: enabled,
          phones: [phone1, phone2]
        }
      );
      closeModal();
      service.loadAllProfesionals();
    }
    setValidated(true);
  }

  let modalTitle = '';
  let styleColor = { color: 'danger', textColor: 'dark' };
  switch (profesionalState.modalOperation) {
    case Operations.ADD_PROFESIONAL:
      modalTitle = 'Add new Profresional';
      styleColor = { color: 'danger', textColor: 'dark' };
      break;
    case Operations.DELETE_PROFESIONAL:
      modalTitle = 'Remove Profresional';
      break;
    case Operations.EDIT_PROFESIONAL:
      modalTitle = 'Edit Profresional';
      break;
    case Operations.SHOW_PROFESIONAL:
      modalTitle = 'Show Profresional';
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
                label="First Name"
                defaultValue={firstName}
                onChange={(event)=>setFirstName(event.target.value)}
                required
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label="Last Name"
                defaultValue={lastName}
                onChange={(event)=>setLastName(event.target.value)}
                required
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label="Degree"
                defaultValue={degree}
                onChange={(event)=>setDegree(event.target.value)}
                required
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label="Licence"
                defaultValue={licence}
                onChange={(event)=>setLicence(event.target.value)}
                required
              />
            </CCol>

            <CCol md={6}>
              <CFormInput
                type="text"
                label="Phone N1"
                defaultValue={phone1}
                onChange={(event)=>setPhone1(event.target.value)}
                required
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                label="Phone 2"
                defaultValue={phone2}
                onChange={(event)=>setPhone2(event.target.value)}
              />
            </CCol>
            <CCol md={12}>
              <CFormInput
                type="text"
                label="E-Mail"
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </CCol>
            <CCol xs={12} className="align-self-end">
              <CFormCheck
                type="checkbox"
                label="Enable profesional"
                defaultChecked={enabled}
                onChange={(event) => setEnabled(event.target.checked)}
                required
              />
              <CButtonGroup>
                <CButton color="primary" type="submit">
                  Submit form
                </CButton>
                <CButton color="danger" type="submit" onClick={closeModal}>
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

export default ProfesionalModal

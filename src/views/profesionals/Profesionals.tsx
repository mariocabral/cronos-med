import React from 'react';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilDescription,
  cilPencil,
  cilPeople,
  cilReload,
  cilSearch,
  cilTrash,
  cilUser,
  cilUserPlus
} from '@coreui/icons';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectProfesional, setCurrentProfesional, showProfesionalModal, showProfesionalDeleteModal, setModalOperation, updateSearch } from '../../state/reducers/profesionalReducer';
import { ProfesionalService } from '../../services/profesional-service';
import { ProfesionalResponse } from '../../apis/models';
import ProfesionalModal from './ProfesionalModal';
import ProfesionalDeleteModal from './ProfesionalDeleteModal';
import { Operations } from '../../state/models/ProfesionalState';
import { useTranslation } from "react-i18next";


const Profesionals: React.FC = () => {
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);
  const profesionalTable = profesionalState.profesionals;
  const service = new ProfesionalService();
  const {t} = useTranslation();

  const loadTable = () => {
    service.loadAllProfesionals(profesionalState.search);
  };

  const newProfesional = () => {
    dispatch(setModalOperation(Operations.ADD_PROFESIONAL));
    dispatch(setCurrentProfesional(undefined));
    dispatch(showProfesionalModal(true));
  };
  

  const updateSearchValue = (event: any) => {
    if (event.target.value.length > 0)
      dispatch(updateSearch(event.target.value))
    else
      dispatch(updateSearch(undefined));
  };

  const pressEnterToSearch = (event: any) => {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
      searchProfesionals();
    }
  };

  const searchProfesionals = () => {
    console.log("Search " + profesionalState.search);
    service.loadAllProfesionals(profesionalState.search);
  };

  const showProfesionalInfo = (item : ProfesionalResponse) => {
    dispatch(setModalOperation(Operations.SHOW_PROFESIONAL));
    dispatch(setCurrentProfesional(item));
    dispatch(showProfesionalModal(true));
  };

  const updateProfesionalInfo = (item : ProfesionalResponse) => {
    dispatch(setCurrentProfesional(item));
    dispatch(setModalOperation(Operations.EDIT_PROFESIONAL));
    dispatch(showProfesionalModal(true));
  };
  
  const deleteProfesionalInfo = (item : ProfesionalResponse) => {
    dispatch(setCurrentProfesional(item));
    dispatch(setModalOperation(Operations.DELETE_PROFESIONAL));
    dispatch(showProfesionalDeleteModal(true));
  };

  return (
    <>
    <CContainer fluid>
      <CCard>
        <CCardHeader>{t("views.profesional.title")}</CCardHeader>
        <CCardBody>
          <CRow className="justify-content-between">
            <CCol>
              <CRow>
                <CCol>
                  <div className="border-start border-start-4 border-start-info py-1 px-3">
                    <div className="text-medium-emphasis small">{t("views.profesional.profesional_count")}</div>
                    <div className="fs-5 fw-semibold">{profesionalTable.length}</div>
                  </div>
                </CCol>
              </CRow>
            </CCol>

            <CCol>
              <CRow className="justify-content-end">
                <CCol xs="auto">
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder={t("views.profesional.search")} aria-label="Recipient's username" aria-describedby="button-addon2"
                      onChange={updateSearchValue} onKeyDown={pressEnterToSearch} />
                    <CButton type="button" color="secondary" variant="outline" id="button-addon2" onClick={() => searchProfesionals()}>
                      <span className="btn-icon mr-3"><CIcon icon={cilSearch} /> </span>
                    </CButton>
                  </CInputGroup>
                </CCol>
                <CCol xs="auto">
                  <CButton variant="outline" color="success" onClick={() => newProfesional()}>
                    <span className="btn-icon mr-2"><CIcon icon={cilUserPlus} /> </span>
                  </CButton>
                </CCol>
                <CCol xs="auto">
                  <CButton variant="outline" color="secondary" onClick={() => loadTable()}>
                    <span className="btn-icon mr-3"><CIcon icon={cilReload} /> </span>
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>

          <br />

          <CTable align="middle" className="mb-0 border" hover responsive striped>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>{t("views.profesional.table.name")}</CTableHeaderCell>
                <CTableHeaderCell className="col-2">{t("views.profesional.table.licence")}</CTableHeaderCell>
                <CTableHeaderCell className="text-center">{t("views.profesional.table.phones")}</CTableHeaderCell>
                <CTableHeaderCell className="col-1"></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {profesionalTable.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CIcon icon={cilUser} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.firstName}, {item.lastName}</div>
                    <div className="small text-medium-emphasis">
                          <span>{item.degree }</span>
                      </div>
                  </CTableDataCell>
                  <CTableDataCell >
                    <div>{item.licence}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div>{item.phones}</div>
                  </CTableDataCell>
                  <CTableDataCell >
                    <CCol>
                      <CButtonGroup role="group" >
                        <CButton variant="outline" color="success" onClick={(event) => showProfesionalInfo(item)}>
                          <span className="btn-icon mr-2"><CIcon icon={cilDescription} /> </span>
                        </CButton>
                        <CButton variant="outline" color="info" onClick={() => updateProfesionalInfo(item)}>
                          <span className="btn-icon mr-2"><CIcon icon={cilPencil} /> </span>
                        </CButton>
                        <CButton variant="outline" color="danger" onClick={() => deleteProfesionalInfo(item)}>
                          <span className="btn-icon mr-2"><CIcon icon={cilTrash} /> </span>
                        </CButton>
                      </CButtonGroup>
                    </CCol>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CContainer>
    <ProfesionalModal></ProfesionalModal>
    <ProfesionalDeleteModal></ProfesionalDeleteModal>
    </>
  )
}

export default Profesionals

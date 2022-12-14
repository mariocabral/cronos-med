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
  CBadge,
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
import { selectRoom, setCurrentRoom, showRoomModal, showRoomDeleteModal, setModalOperation, updateSearch } from '../../state/reducers/roomReducer';
import { RoomService } from '../../services/room-service';
import { RoomResponse } from '../../apis/models';
import RoomModal from './RoomModal';
import RoomDeleteModal from './ProfesionalDeleteModal';
import { Operations } from '../../state/models/RoomState';
import { useTranslation } from "react-i18next";


const ConsultingRooms: React.FC = () => {
  const dispatch = useAppDispatch();
  const roomState = useAppSelector(selectRoom);
  const roomTable = roomState.rooms;
  const service = new RoomService();
  const {t} = useTranslation();

  const loadTable = () => {
    service.loadAllRooms(roomState.search);
  };

  const newProfesional = () => {
    dispatch(setModalOperation(Operations.ADD_ROOM));
    dispatch(setCurrentRoom(undefined));
    dispatch(showRoomModal(true));
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
    console.log("Search " + roomState.search);
    service.loadAllRooms(roomState.search);
  };

  const showProfesionalInfo = (item : RoomResponse) => {
    dispatch(setModalOperation(Operations.SHOW_ROOM));
    dispatch(setCurrentRoom(item));
    dispatch(showRoomModal(true));
  };

  const updateProfesionalInfo = (item : RoomResponse) => {
    dispatch(setCurrentRoom(item));
    dispatch(setModalOperation(Operations.EDIT_ROOM));
    dispatch(showRoomModal(true));
  };
  
  const deleteProfesionalInfo = (item : RoomResponse) => {
    dispatch(setCurrentRoom(item));
    dispatch(setModalOperation(Operations.DELETE_ROOM));
    dispatch(showRoomDeleteModal(true));
  };

  return (
    <>
    <CContainer fluid>
      <CCard>
        <CCardHeader>{t("views.room.title")}</CCardHeader>
        <CCardBody>
          <CRow className="justify-content-between">
            <CCol>
              <CRow>
                <CCol>
                  <div className="border-start border-start-4 border-start-info py-1 px-3">
                    <div className="text-medium-emphasis small">{t("views.room.room_count")}</div>
                    <div className="fs-5 fw-semibold">{roomTable.length}</div>
                  </div>
                </CCol>
              </CRow>
            </CCol>

            <CCol>
              <CRow className="justify-content-end">
                <CCol xs="auto">
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder={t("views.room.search")} aria-label="Recipient's username" aria-describedby="button-addon2"
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
                <CTableHeaderCell>{t("views.room.table.name")}</CTableHeaderCell>
                <CTableHeaderCell className="col-2">{t("views.room.table.enabled")}</CTableHeaderCell>
                <CTableHeaderCell className="text-center">{t("views.room.table.description")}</CTableHeaderCell>
                <CTableHeaderCell className="col-1"></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {roomTable.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CIcon icon={cilUser} />
                  </CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell >
                    {
                    item.enabled? <CBadge color="success">{t('views.room.table.enabledFlag')}</CBadge> : 
                                  <CBadge color="danger">{t('views.room.table.disabledFlag')}</CBadge>
                    }
                  </CTableDataCell>
                  <CTableDataCell className="text-center">{item.description}</CTableDataCell>
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
    <RoomModal></RoomModal>
    <RoomDeleteModal></RoomDeleteModal>
    </>
  )
}

export default ConsultingRooms

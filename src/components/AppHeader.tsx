import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './../state/hooks';
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilMenu } from '@coreui/icons'
import { selectSidebarShow, updateSidebarShow } from '../state/reducers/sidebarReducer';
import { useTranslation } from "react-i18next";

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const sidebarState = useAppSelector(selectSidebarShow);
  const {t} = useTranslation();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(updateSidebarShow(!sidebarState.sidebarShow))}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>{t("header.dashboard")}</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">{t("header.setting")}</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader

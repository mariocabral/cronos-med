import React from 'react';
import { useAppSelector, useAppDispatch } from './../state/hooks';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {AppSidebarNav} from './AppSidebarNav';
import { logoNegative } from './../assets/brand/logo-negative';
import { sygnet } from './../assets/brand/sygnet';

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { selectSidebarShow, updateSidebarUnfoldable, updateSidebarShow } from '../state/sidebar/sidebarReducer';

const AppSidebar: React.FC = () =>  {
  const dispatch = useAppDispatch();
  const sidebarState = useAppSelector(selectSidebarShow);
  
  return (
    <CSidebar
      position="fixed"
      unfoldable={sidebarState.sidebarUnfoldable}
      visible={sidebarState.sidebarShow}
      onVisibleChange={(visible) => { dispatch(updateSidebarShow(visible)) }}
    >
      <CSidebarBrand className="d-none d-md-flex" >
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(updateSidebarUnfoldable(!sidebarState.sidebarUnfoldable))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

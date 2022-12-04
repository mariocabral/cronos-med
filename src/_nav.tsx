import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilSpeedometer,
  cilStar,
  cilAddressBook,
  cilPeople,
  cilHospital,
  cilSmile,
  cilHealing
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: "sidebar.dashboard",
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'sidebar.schedule.title',
  },
  {
    component: CNavItem,
    name: 'sidebar.schedule.appointment',
    to: '/appointment',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'sidebar.admin.title',
  },
  {
    component: CNavItem,
    name: 'sidebar.admin.profesional',
    to: '/profesionals',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'sidebar.admin.rooms',
    to: '/consulting-rooms',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'sidebar.admin.patients',
    to: '/patients',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'sidebar.admin.healt',
    to: '/health-insurance',
    icon: <CIcon icon={cilHealing} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'sidebar.admin.reports',
    to: '/reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
  {
    component: CNavTitle,
    name: 'sidebar.extra.title',
  },
  {
    component: CNavGroup,
    name: 'sidebar.extra.stats.title',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'sidebar.extra.stats.patients',
        to: '/patients-stats',
      },
      {
        component: CNavItem,
        name: 'sidebar.extra.stats.profesional',
        to: '/professinal-stats',
      },
      {
        component: CNavItem,
        name: 'sidebar.extra.stats.healt',
        to: '/health-insurance-stats',
      },
    ],
  }
]

export default _nav

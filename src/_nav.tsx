import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilNoteAdd,
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
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Schedule',
  },
  {
    component: CNavItem,
    name: 'Appointment',
    to: '/appointment',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Administration',
  },
  {
    component: CNavItem,
    name: 'Profesionals',
    to: '/profesionals',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'consulting room',
    to: '/consulting-rooms',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'patients',
    to: '/patient',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'health insurance ',
    to: '/health-insurance',
    icon: <CIcon icon={cilHealing} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'reports ',
    to: '/reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Informes',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'patients stats',
        to: '/patients-stats',
      },
      {
        component: CNavItem,
        name: 'professinal stats',
        to: '/professinal-stats',
      },
      {
        component: CNavItem,
        name: 'health insurance stats',
        to: '/health-insurance-stats',
      },
    ],
  }
]

export default _nav

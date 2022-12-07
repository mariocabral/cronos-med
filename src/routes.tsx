import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profesionals = React.lazy(() => import('./views/profesionals/Profesionals'))
const ConsultingRooms = React.lazy(() => import('./views/consultingRooms/ConsultingRooms'))
const Patients = React.lazy(() => import('./views/patients/Patients'))
const Appointment = React.lazy(() => import('./views/appointment/Appointment'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profesionals', name: 'Profesionals', element: Profesionals },
  { path: '/consulting-rooms', name: 'ConsultingRooms', element: ConsultingRooms },
  { path: '/patients', name: 'Patients', element: Patients },
  { path: '/appointment', name: 'Appointment', element: Appointment },
]

export default routes

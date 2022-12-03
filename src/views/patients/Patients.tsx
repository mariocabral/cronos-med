import React from 'react'
import {
    CAvatar,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import {
    cilPeople,
    cifUs,
    cibCcMastercard,
    cifBr,
    cibCcVisa,
    cifIn,
    cibCcStripe,
    cifFr,
    cibCcPaypal,
    cifEs,
    cibCcApplePay,
    cifPl,
    cibCcAmex
  } from '@coreui/icons'

const Patients: React.FC = () => {
    const avatar1 = "http://localhost:3000/static/media/1.34eedf58c0876517e858.jpg";
    const avatar2 = "http://localhost:3000/static/media/2.0c06e43dc16bee6cdfed.jpg";
    const avatar3 = "http://localhost:3000/static/media/3.07e357f51e1b86d9e741.jpg";
    const avatar4 = "http://localhost:3000/static/media/4.3ddf28ab435770c6d69f.jpg";
    const avatar5 = "http://localhost:3000/static/media/5.3e55ee5f667d94054da3.jpg";
    const avatar6 = "http://localhost:3000/static/media/6.edefb235566ed72a7429.jpg";

    const tableExample = [
        {
          avatar: { src: avatar1, status: 'success' },
          user: {
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'USA', flag: cifUs },
          usage: {
            value: 50,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Mastercard', icon: cibCcMastercard },
          activity: '10 sec ago',
        },
        {
          avatar: { src: avatar2, status: 'danger' },
          user: {
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Brazil', flag: cifBr },
          usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'info',
          },
          payment: { name: 'Visa', icon: cibCcVisa },
          activity: '5 minutes ago',
        },
        {
          avatar: { src: avatar3, status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'India', flag: cifIn },
          usage: {
            value: 74,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'warning',
          },
          payment: { name: 'Stripe', icon: cibCcStripe },
          activity: '1 hour ago',
        },
        {
          avatar: { src: avatar4, status: 'secondary' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'France', flag: cifFr },
          usage: {
            value: 98,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'danger',
          },
          payment: { name: 'PayPal', icon: cibCcPaypal },
          activity: 'Last month',
        },
        {
          avatar: { src: avatar5, status: 'success' },
          user: {
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Spain', flag: cifEs },
          usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'primary',
          },
          payment: { name: 'Google Wallet', icon: cibCcApplePay },
          activity: 'Last week',
        },
        {
          avatar: { src: avatar6, status: 'danger' },
          user: {
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Poland', flag: cifPl },
          usage: {
            value: 43,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Amex', icon: cibCcAmex },
          activity: 'Last week',
        },
      ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Patients

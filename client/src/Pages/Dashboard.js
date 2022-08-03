import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styling/dashboard.css'
import SidePanel from '../Components/SidePanel'




const Dashboard = () => {
  return (
    <>
    <Container fluid className='dashpanel d-flex justify-content-start'>
        <SidePanel/>


        <Row className=' ms-5'>
            <Col>
                Hello
            </Col>

            </Row>

    </Container>
    </>
  )
}

export default Dashboard
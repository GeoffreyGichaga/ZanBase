import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styling/dashboard.css'


const Dashboard = () => {
  return (
    <>
    <Container fluid className='d-flex justify-content-start'>
        <Row className='sidepanel'>
            <Col>
                Hello
            </Col>
        </Row>


        <Row className='ms-5'>
            <Col>
                Hello
            </Col>

            </Row>

    </Container>
    </>
  )
}

export default Dashboard
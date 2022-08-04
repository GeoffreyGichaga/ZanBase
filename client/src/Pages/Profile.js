import React from 'react'
import Container from 'react-bootstrap/Container'
import SidePanel from '../Components/SidePanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import '../Styling/Profile.css'

const Profile = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Col sm={12} md={6} lg={2} className='sidepanel'>

            <SidePanel/>
        </Col>
        <Col sm={12} md={6} lg={8} className='mt-5' >
        <Card  className='infocards mt-5'>
                <Card.Body className='d-flex justify-content-start'>
                  
                    <span className='yellowcircle ms-2'>
                        <h1 className='name mt-lg-0'>G</h1>
                    </span>                    

                  

                  <Card.Text className='card-info ms-4 text-start'>
                    <p className='fulldate'>User NAME </p>
                    <p className='fulldate'>Position </p>
                    <p className='fulldate'>Email </p>


                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
    </Row>

    </Container>
    </>
  )
}

export default Profile
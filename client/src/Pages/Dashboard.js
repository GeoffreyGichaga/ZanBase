import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styling/dashboard.css'
import whitelogo from '../Assets/white-logo.png'
import dash from '../Assets/dashboard.png'


const Dashboard = () => {
  return (
    <>
    <Container fluid className='dashpanel d-flex justify-content-start'>
        <Row className='sidepanel'>
            <Col>
                {/* Zanbase Logo */}
                <div>
                    <img className='zanlogo mt-3' src={whitelogo} alt='zanalogo'/>
                </div>

                {/* Menu Icons */}
                <div className='d-flex mt-5'>
                    <img className='menu-icons' src={dash} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Dashboard</h4>
                </div>
                {/* Menu Icons */}


            </Col>
        </Row>


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
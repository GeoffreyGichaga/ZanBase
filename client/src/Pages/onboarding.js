import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import purplelogo from '../Assets/purple-logo.png'
import '../Styling/onboarding.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Onboarding = () => {
  return (
    <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={purplelogo} alt='Logo'/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='navlinks' href="/home">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navlinks' eventKey="link-1">Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Container>
            <Row>

            </Row>
        </Container>



    </>
  )
}

export default Onboarding
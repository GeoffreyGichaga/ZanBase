import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import purplelogo from '../Assets/purple-logo.png'
import '../Styling/onboarding.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import onboardingImg from '../Assets/onboardimg1.png'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const Onboarding = () => {
    const navigate = useNavigate()

  return (
    <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={purplelogo} alt='Logo'/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='navlinks' href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navlinks' href="/signup">Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Container className='mt-5'>
            <Row className='mt-5'>
                <Col sm={12} md={6} lg={6} className='onboarding-statement2 mt-5'>
                    <h2 className='onboard-title text-start'>Where Teams</h2>
                    <li className='onboard-statement text-start mt-2'>Plan</li>
                    <li className='onboard-statement text-start mt-2'>Work</li>
                    <li className='onboard-statement text-start mt-2'>Succeed</li>
                    <p className='onboard-statement text-start mt-5'>
                        ZanBase is a comprehensive master data management product <br/>that offers an intriguing list of capabilities for many use cases.<br/>
                        The solution offers auto generation of PV's ,Task Scheduling service,<br/> Targets/Goals Board and Tutorials.  
                    </p>

                    <Button onClick={()=>navigate('/signup')} id='getstartbtn' className='d-flex justify-content-start mt-4'>Get Started</Button>
                    
                    
                </Col>

                <Col className='sm-col-6 md-col-12 lg-col-6'>
                    <img className='Onboardimg' src={onboardingImg} alt='Logo'/>
                
                </Col>


            </Row>
        </Container>



    </>
  )
}

export default Onboarding
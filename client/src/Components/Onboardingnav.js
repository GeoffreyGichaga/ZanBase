import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../Styling/Onboardingnav.css'
import purplelogo from '../Assets/Images/purple-logo.png'
import Container from 'react-bootstrap/Container'


const Onboardingnav = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={purplelogo}
              id='logo'
              className="d-inline-block "
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav className="nav-links justify-content-end  ml-3" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav.Item>     
          </Nav>

        </Container>
      </Navbar>

    </>
  )
}

export default Onboardingnav
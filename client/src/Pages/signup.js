import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import circlemgt from '../Assets/circlemgt.png'
import '../Styling/signup.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import user from '../Assets/user.png'
import email from '../Assets/email.png'
import padlock from '../Assets/padlock.png'






const signup = () => {
  
  return (
    <>
    <Container fluid className='mt-5'>
      <Row className='mt-5'>
        <Col sm={12} md={6} lg={6} className='mt-5'>
          <img className='w-50' src={circlemgt} alt='team'/>
        </Col>




      {/* Signup Form  */}
        <Col sm={12} md={6} lg={6} className='mt-5'>
          <h3 className='signup-title'>Signup</h3>
          <Form>

            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text  id="firstnameinput">
                    <img className='inputlogo' src={user} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                className='inputspace'
                  placeholder="FirstName"
                  aria-label="FirstName"
                  aria-describedby="usernameinput"
                />
              </InputGroup>


              <InputGroup as={Col} className=" mb-3">
                
                <Form.Control
                  className='inputspace'
                  placeholder="LastName"
                  aria-label="LastName"
                  aria-describedby="lastname"
                />
                
              </InputGroup>
              
              

            </Row>



            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text id="emailinput">
                    <img className='inputlogo' src={email} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                  className='inputspace'
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="emailinput"
                  type='email'
                />
              </InputGroup>

              <InputGroup as={Col} className=" mb-3">
                  

                <Form.Control
                  className='inputspace'
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="usernameinput"
                  type='email'
                />
              </InputGroup>

              <Form.Text muted className='orgtext d-flex justify-content-start'>
                @zanaafrica.org or @zanaafrica.com
              </Form.Text>


            
        
            </Row>

            <Row className="mb-3 mt-5 d-flex">
              <Col>
                <Form.Select>
                  <option>Select Role</option>
                  <option value="1">Intern</option>
                  <option value="">Manager</option>
                  <option value="">Consultant</option>
                  <option value="">Social media Manager </option>

                </Form.Select>
              </Col>

              <Col>
                <Form.Select>
                  <option>Select Supervisor</option>
                  <option value="1">Angie Akweyu</option>
                  <option value="">Oliver Tambo</option>
                  <option value="">Florence Ngayo</option>
                  <option value="">Alice</option>
                  <option value="">Ben Shikuku</option>
            

                </Form.Select>
              </Col>

              
              

        


            
        
            </Row>



            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text id="passwordinput">
                    <img className='inputlogo' src={padlock} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                  className='inputspace'
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="passwordinput"
                  type='password'
                />
              </InputGroup>


              <InputGroup as={Col} className=" mb-3">
                 

                <Form.Control
                  className='inputspace'
                  placeholder="Confirm Password"
                  aria-label="Password"
                  aria-describedby="passwordinput"
                  type='password'
                />
              </InputGroup>
              

            </Row>



            
            

              <Button id='submitbtn' variant="primary" type="submit">
                Submit
              </Button>

              <div className='mt-3'>
                <p className='logintext'>Already Registered? <a className='alink' href='/login'>Login</a></p>
              </div>
          </Form>




        </Col>
      </Row>


    </Container>

      
    </>
  )
}

export default signup
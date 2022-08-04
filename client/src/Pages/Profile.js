import React from 'react'
import Container from 'react-bootstrap/Container'
import SidePanel from '../Components/SidePanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import '../Styling/Profile.css'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import user from '../Assets/user.png'


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

export default Profile
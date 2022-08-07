import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import circlemgt from '../Assets/circlemgt.png'
import '../Styling/signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import user from '../Assets/user.png'
import emailpic from '../Assets/email.png'
import padlock from '../Assets/padlock.png'
import {useNavigate} from 'react-router-dom'






const Signup = () => {
  const navigate = useNavigate()


  const[firstName,setFirstName] = useState("")
  const[lastname,setLastName] = useState("")
  const [username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[role,setRole] = useState("")
  const[supervisor,setSuperVisor] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")


  function handleSubmit(e){
    e.preventDefault()
    const user = {
      firstName,
      lastname,
      email,
      username,
      role,
      supervisor,
      password
    }


    fetch("https://zanbase-backend.herokuapp.com/users",{
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => {
      navigate('/dashboard')

    })
  }


  
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
          <Form onSubmit={handleSubmit}>

            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className="mb-3">
                  <InputGroup.Text  id="firstnameinput">
                    <img className='inputlogo' src={user} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                className='inputspace'
                  placeholder="FirstName"
                  aria-label="FirstName"
                  value ={firstName}
                  aria-describedby="usernameinput"
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </InputGroup>


              <InputGroup as={Col} className="mb-3">
                
                <Form.Control
                  className='inputspace'
                  placeholder="LastName"
                  aria-label="LastName"
                  value={lastname}
                  aria-describedby="Lastname"
                  onChange={(e)=> setLastName(e.target.value)}
                />
                
              </InputGroup>
              
              

            </Row>



            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text id="emailinput">
                    <img className='inputlogo' src={emailpic} alt={"userimg2"}/>
                  </InputGroup.Text>

                <Form.Control
                  className='inputspace'
                  placeholder="Email"
                  aria-label="Email"
                  value={email}
                  aria-describedby="emailinput"
                  type='email'
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </InputGroup>

              <InputGroup as={Col} className=" mb-3">
                  

                <Form.Control
                  className='inputspace'
                  placeholder="Username"
                  aria-label="Username"
                  value = {username}
                  aria-describedby="usernameinput"
                  type='email'
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </InputGroup>

              <Form.Text muted className='orgtext d-flex justify-content-start'>
                abc@zanaafrica.org or abc@zanaafrica.com
              </Form.Text>


            
        
            </Row>

            <Row className="mb-3 mt-5 d-flex">
              <Col>
                <Form.Select value={role} onChange={(e)=> setRole(e.target.value)}>
                  <option>Select Role</option>
                  <option value="1">Intern</option>
                  <option value="2">Manager</option>
                  <option value="3">Consultant</option>
                  <option value="4">Social media Manager </option>

                </Form.Select>
              </Col>

              <Col>
                <Form.Select value={supervisor} onChange={(e)=> setSuperVisor(e.target.value)}>
                  <option>Select Supervisor</option>
                  <option value="1">Angie Akweyu</option>
                  <option value="2">Oliver Tambo</option>
                  <option value="3">Florence Ngayo</option>
                  <option value="4">Jane Nthanze</option>
                  <option value="5">Ben Shikuku</option>
            

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
                  value = {password}
                  aria-describedby="passwordinput"
                  type='password'
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </InputGroup>


              <InputGroup as={Col} className=" mb-3">
                 

                <Form.Control
                  className='inputspace'
                  placeholder="Confirm Password"
                  aria-label="Password"
                  value={confirmPassword}
                  aria-describedby="passwordinput"
                  type='password'
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </InputGroup>
              

            </Row>



            
            

              <Button  id='submitbtn' variant="primary" type="submit">
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

export default Signup

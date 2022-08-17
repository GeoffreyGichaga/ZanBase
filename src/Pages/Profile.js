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

    // let formSubmit = async (e)=>{

    //     e.preventDefault()

    //     const userDetails = {
            
    //     }

    //     try {
    //         let res = await fetch("https://zanbase-backend.herokuapp.com/user_details", 
    //         {
    //           method: "POST",
    //           headers: {'Content-Type':'application/json'},
    //           body: JSON.stringify(user)
    //         });
      
      
    //         let resJson = await res.json()
    //         if (res.status === 201)
    //         {
    //           setCurrentUser(resJson)
    //           return <Dashboard currentLoggedUser={currentUser.summary}/>
              
      
    //         }
    //       } catch(err){
    //         console.log(err);
    //       }
    // }


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
            

            <Form id='paymentdetails' className='p-3 mt-3'>
                <p className='payment-title text-start'>Payment Details</p>

                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="accnameinput">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Name on Account"
                        aria-label="Name on Account"
                        aria-describedby="accnameinput"
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="banknameinput">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Bank Name"
                        aria-label="banknameinput"
                        aria-describedby="banknameinput"
                        />
                        
                    </InputGroup>
                
                

                </Row>



                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="AccountNo">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Account #"
                        aria-label="AccountNo"
                        aria-describedby="usernameinput"
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="BankCode">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Bank Code"
                        aria-label="BankCode"
                        aria-describedby="BankCode"
                        />
                        
                    </InputGroup>
                
                

                </Row>






                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="branchcode">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Branch Code"
                        aria-label="branchcode"
                        aria-describedby="branchcodeinput"
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="Tel">
                            <img className='inputlogo' src={user} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Telephone #"
                        aria-label="Tel"
                        aria-describedby="Tel"
                        />
                        
                    </InputGroup>
                
                

                </Row>
                



              <div>
                  <Button id='updatebtn' variant="primary" type="submit">
                Update
              </Button>
              <Button id='submitbtn' className='ms-3' variant="primary" type="submit">
                Submit
              </Button>
              </div>

              
          </Form>

        </Col>
        
        
    </Row>

    </Container>
    </>
  )
}

export default Profile
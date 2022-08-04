import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import '../Styling/Register.css'
import Button  from 'react-bootstrap/Button'





const AttendanceRegister = () => {
  return (
      <>
      <Container fluid>
        <Row className='flexable justify-content-start'>
            <Col id='attendacesidepanel' sm={12} md={6} lg={2}  className='sidepanel'>

                <SidePanel/>
            </Col>

            <Col sm={12} md={6} lg={8} className='scrollit mt-5 ms-5  ' >


                <Card  className='infocards mt-4'>
                    <Card.Body className='d-flex justify-content-start'>
                    
                        <span className='yellowcircle ms-2'>
                            <h1 className='name mt-lg-0'>G</h1>
                        </span>                    

                    

                    <Card.Text className='card-info ms-4 text-start'>
                        <p className='fulldate'>User NAME </p>
                        <p className='fulldate'>Position </p>
                        <p className='fulldate'>Email </p>
                        <Button id='addtaskbtn'>Add Today's Activities</Button>
                    </Card.Text>
                    
                    </Card.Body>
                </Card>

                
            


            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>TimeIn</th>
                    <th>Time Out</th>
                    <th>Activities</th>
                    <th>Sign</th>
                    <th>Checked By:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1/7/2022</td>
                        <td>0800</td>
                        <td>1700</td>
                        <td>Web Dev</td>
                        <td>G.G</td>
                        <td>Angie</td>
                    </tr>
                    

                    
                    
                </tbody>
            </Table>
            </Col>

            

        </Row>
        

      </Container>
      </>
    
  )
}

export default AttendanceRegister
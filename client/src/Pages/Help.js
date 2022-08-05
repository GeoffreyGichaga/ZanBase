import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Styling/Help.css'
import HelpNav from '../Components/HelpNav'




const Task = () => {
  return (
    <>
      <HelpNav/>

    <Container >
      <Row>
            <h4 className='help-titles text-center mt-4 mb-3'>Help Center</h4>
            <Col className='d-flex justify-content-center' lg={12}>
            <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchinput me-2"
              aria-label="Search"
              
            />
            <Button id='searchbtn' variant="outline-success">Search</Button>
          </Form>
            </Col>
      </Row>
        <Row>
          
            <Col className='mt-5' >
            

            <h3 className='help-titles mt-5 text-start'>Getting Started</h3>
            



          
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default Task
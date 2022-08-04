import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../Styling/dashboard.css'
import '../Styling/TopTargets.css'



const TopTargets = () => {
    
  return (
    <>
    
    
    <CardGroup className='targetsgroup  mt-5'>
    
        <Card id='toptargetscard1' className='p-2'>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small id='targets-footer1' >Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>

      <Card id='toptargetscard2' className='p-2'>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer id='targets-footer2'>
            <small  >Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>




      <Card id='toptargetscard3' className='p-2'>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer id='targets-footer3'>
            <small>Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>
        
    </CardGroup>
    </>
  )
}

export default TopTargets
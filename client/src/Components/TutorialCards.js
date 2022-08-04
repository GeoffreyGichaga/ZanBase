import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../Styling/Tutorialcards.css'

const TutorialCards = () => {
  return (
    <>
    <p className='text-start mt-1'>Top Tutorials</p>
    <CardGroup className='mt-5'>
        <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>For Remote Workers</Card.Title>
            <Card.Text className='tut-info'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button id='seecourse' variant="primary">View Course</Button>
        </Card.Body>
        </Card>

        <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Reducing Stress</Card.Title>
            <Card.Text className='tut-info'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button id='seecourse2' variant="primary">View Course</Button>
        </Card.Body>
        </Card>



        <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Managers & all Leaders</Card.Title>
            <Card.Text className='tut-info'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button id='seecourse3' variant="primary">View Course</Button>
        </Card.Body>
        </Card>
    </CardGroup>
    </>
  )
}

export default TutorialCards
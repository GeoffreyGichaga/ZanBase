import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styling/dashboard.css'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import bellnot from '../Assets/notification.png'
import calendar from '../Assets/calendar.png'
import TopTargets from '../Components/TopTargets'
import CardGroup from 'react-bootstrap/CardGroup'
import TutorialCards from '../Components/TutorialCards'




const Dashboard = () => {

  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const current = new Date()
  const day = current.getDay()
  const date = current.getDate()
  const month = current.getMonth()
  const year = current.getFullYear()

  const displayDay = week[day]
  const fullDate = `${date} / ${month}/ ${year}`





  return (
    <>
      <Container fluid className='dashpanel'>
        <Row>
          <Col sm={12} md={6} lg={2} className='sidepanel'>

              <SidePanel/>
          </Col>

          <Col sm={12} md={6} lg={8} className='mt-5' >
            <CardGroup>
           
              <Card  className='infocards mt-5'>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title className='card-title text-start mt-2'>{displayDay}</Card.Title>
                    

                  </div>
                  <Card.Text className='card-info d-flex text-start mt-4'>
                    <img className='calendaricon' src={calendar} alt='calendar'/>
                    <p className='fulldate ms-3'>{fullDate}</p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className='infocards mt-5 ms-lg-3'>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title className='card-title text-start mt-2'>Notifications</Card.Title>
                    <span className='yellowcircle'>
                      <img className='bellicon ms-1 mt-2' src={bellnot} alt='bell'/>
                    </span>

                  </div>
                  <Card.Text className='card-info text-start mt-4'>
                    No Notifications
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
            
            {/* Top Targets */}
             
            <TopTargets/>
            {/* End of Top Targets */}

            {/* Featured Tutorials */}
            <TutorialCards/>

            {/* End of Featured Tutorials */}


 
          </Col>

          

          
          

            
            

            

        </Row>
        


          

        
          

      </Container>
      {/* <Card className='infocards '>
                    <Card.Body>
                      <div className='d-flex justify-content-between'>
                        <Card.Title className='card-title text-start mt-2'>Notifications</Card.Title>
                        <span className='yellowcircle'>
                          <img className='bellicon ms-1 mt-2' src={bellnot} alt='bell'/>
                        </span>

                      </div>
                      <Card.Text className='card-info text-start mt-4'>
                        No Notifications
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> */}
    </>
  )
}

export default Dashboard



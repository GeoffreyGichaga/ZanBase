import React from 'react'
import '../Styling/SidePanel.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import whitelogo from '../Assets/white-logo.png'
import dash from '../Assets/dashboard.png'
import user2 from '../Assets/user2.png'
import files from '../Assets/files.png'
import graduationhat from '../Assets/graduation-hat.png'
import information from '../Assets/information.png'
import clipboards from '../Assets/clipboards.png'
import bell from '../Assets/bell.png'
import checklist from '../Assets/checklist.png'
import user3 from '../Assets/user3.png'
import logout from '../Assets/logout.png'

const SidePanel = () => {
  return (
    <>
        <Row className='sidepanel'>
            <Col className='ms-2'>
                {/* Zanbase Logo */}
                <div>
                    <img className='zanlogo mt-3' src={whitelogo} alt='zanalogo'/>
                </div>

                {/* Menu Icons */}
                <div className='d-flex mt-5'>
                    <img className='menu-icons' src={dash} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Dashboard</h4>
                </div>

                <div className='d-flex mt-3'>
                    <img className='menu-icons' src={user2} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Profile</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={user3} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Attendance Register</h4>
                </div>

                <div className='d-flex mt-3'>
                    <img className='menu-icons' src={files} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>PV's</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={checklist} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Task's</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={bell} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Messages</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={clipboards} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Targets Board</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={graduationhat} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Tutorials</h4>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={information} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Help</h4>
                </div>



                {/* Logout Button  */}
                <div className='d-flex mt-5'>
                    <img className='menu-icons' src={logout} alt='Dash'/>
                    <h4 className='menutext ms-3 mt-1'>Logout</h4>
                </div>
                {/* Menu Icons */}


            </Col>
        </Row>
    </>
  )
}

export default SidePanel
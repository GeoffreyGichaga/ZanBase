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
import {useNavigate} from 'react-router-dom'

const SidePanel = () => {
    const navigate = useNavigate()
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
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Dashboard</a>
                </div>

                <div className='d-flex mt-3'>
                    <img className='menu-icons' src={user2} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Profile</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={user3} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Attendance Register</a>
                </div>

                <div className='d-flex mt-3'>
                    <img className='menu-icons' src={files} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>PV's</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={checklist} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Tasks</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={bell} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Messages</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={clipboards} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Targets Board</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={graduationhat} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Tutorials</a>
                </div>

                <div className='d-flex mt-4'>
                    <img className='menu-icons' src={information} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Help</a>
                </div>

                <hr className='hrline mt-4'/>



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
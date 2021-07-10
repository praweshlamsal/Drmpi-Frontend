import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { faEnvelope, faPhone, faRetweet } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../Navigation/Navigation'


function Header() {
    return (
        <div>
            <div className="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="list-inline top-left">
                                <li><a href="#"><div className="icon"><FontAwesomeIcon icon={faPhone} /></div>011-620323</a></li>
                                <li><a href="#"><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>drmpi.sindhu@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-inline top-right media">
                                <li><a href="#"></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>





            <Navigation menus={["Home", "About Us", "Notice", "Results", "Vacancy", "Scholarship", "Contact"]} />





        </div >
    )
}

export default Header

import React from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'


function Header() {
    return (
        <div>
            <div className="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="list-inline top-left">
                                <li><a href="#"><i className="fas fa-phone icon"></i>011-620323</a></li>
                                <li><a href="#"><i className="fa fa-envelope icon"></i>drmpi,sindhu@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-inline top-right media">
                                <li><a href="#"></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>





            <Navbar className="navigation">
                <Container>
                    <Row className="w-100 justify-content-between">
                        <Col className="col-2">
                            <Navbar.Brand className="nav-logo" href="#home">
                                <img
                                    src="logo.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="DRMPI Logo"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col className="col-9 d-flex justify-content-end col-xs-8">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse className="flex-row" id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>





        </div >
    )
}

export default Header

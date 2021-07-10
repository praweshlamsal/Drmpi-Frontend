import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container, Navbar, Row } from 'react-bootstrap'

interface IProps {
    menus: string[]
}
const Navigation = (props: IProps) => {

    return (
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
                                {props.menus.map((item: string) =>
                                    <Nav.Link className="active" href="#home">{item}</Nav.Link>
                                )}
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">{
                                    props.menus.map((item: string) =>
                                        <NavDropdown.Item href="#action/3.1">{item}</NavDropdown.Item>
                                    )
                                }
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Navigation

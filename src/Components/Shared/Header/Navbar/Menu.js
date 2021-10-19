import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#">i-Pharma</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={NavLink} to='/home' exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/services' exact>Services</Nav.Link>
                    <Nav.Link as={NavLink} to='/blogs' exact>Blogs</Nav.Link>
                    <Nav.Link as={NavLink} to='/privacy' exact>Privacy</Nav.Link>
                    <Nav.Link as={NavLink} to='/terms' exact>Terms</Nav.Link>
                    
                </Nav>
                <Nav>
                 <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                </Nav>
                  </Navbar.Collapse>
                </Container>
          </Navbar>
       </div>
    );
};

export default Menu;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Menu = () => {
    const {user, logOut} = useAuth();
    return (
        
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">i-Pharma</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="text-info" as={NavLink} to='/home' exact>Home</Nav.Link>
                    <Nav.Link className="text-info" as={NavLink} to='/services' exact>Services</Nav.Link>
                    <Nav.Link className="text-info" as={NavLink} to='/blogs' exact>Blogs</Nav.Link>
                    <Nav.Link className="text-info" as={NavLink} to='/privacy' exact>Privacy</Nav.Link>
                    <Nav.Link className="text-info" as={NavLink} to='/terms' exact>Terms</Nav.Link>
                    <Nav.Link className="text-info" as={NavLink} to='/contact-us' exact>Contact Us</Nav.Link>
                    
                </Nav>
                {user.displayName?<Navbar.Text className="text-info">
                    {user?.displayName }
                </Navbar.Text>
                :
                <Navbar.Text className="text-info">
                    {user?.email?.substring(0,user?.email?.lastIndexOf("@"))}
                </Navbar.Text>}
                <Nav>
                 {user?.email ?
                 <Button onClick={logOut} className="mx-2 text-bold" variant="info">Logout</Button>:
                     <Nav.Link className="text-info" as={NavLink} to='/login'>Login</Nav.Link>}
                </Nav>

                
                  </Navbar.Collapse>
                </Container>
          </Navbar>
       </div>
    );
};

export default Menu;
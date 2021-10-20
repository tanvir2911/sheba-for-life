import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Sheba</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        {user.displayName && <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>}


                        {(user.displayName || user.email) ? (<Nav.Link onClick={logOut} style={{ color: 'Black', backgroundColor: 'wheat', marginLeft: '5px' }}>Logout</Nav.Link>) :
                            (<Nav.Link as={Link} to="/login">Login</Nav.Link> && <Nav.Link as={Link} to="/registration">Register</Nav.Link>)}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbarr = () => {

    let location = useLocation();
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
            <Link className="navbar-brand" to="/">Student list</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to="/">Register</Link>
                    <Link className={`nav-link ${location.pathname === "/details"? "active": ""}`} to="/details">Details</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr

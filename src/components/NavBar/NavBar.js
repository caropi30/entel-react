//import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import entelLogo from '../../assets/img/entel/entelLogo.png';
import CartButton from './components/Buttons/CartButton' 

const NavBar = (props) =>  {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={entelLogo} alt="Logo Entel"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Equipos</Nav.Link>
                <Nav.Link href="#link">Accesorios</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <CartButton/>
        </Navbar>
    )
};

export default NavBar;
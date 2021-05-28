//import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import entelLogo from '../../assets/img/entel/entelLogo.png';
import {Link} from 'react-router-dom';
//import CartButton from './components/Buttons/CartButton' 

const NavBar = (props) =>  {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={entelLogo} alt="Logo Entel"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">{props.home}</Nav.Link>
                <Nav.Link href="#equipments"><Link></Link></Nav.Link>
                <Nav.Link href="#accesories">{props.accesories}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
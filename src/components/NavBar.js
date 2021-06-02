//import Navbar from 'react-bootstrap/Navbar';
import {Navbar, Nav} from 'react-bootstrap';
import entelLogo from '../assets/img/entel/entelLogo.png';
import CartWidget from './CartWidget';
//import itemListContainer from './itemListContainer';

const NavBar = () =>  {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={entelLogo} alt="Logo Entel"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Equipos</Nav.Link>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
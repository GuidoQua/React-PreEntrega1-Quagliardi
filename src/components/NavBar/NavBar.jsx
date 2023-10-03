
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Button, Navbar, Nav, } from 'react-bootstrap'; // Importa componentes de Bootstrap
import * as bootstrap from 'bootstrap'
import CarWidget from '../CarWidget/CarWidget';

const NavBar = () => {

    return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">|B-BallStyle</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#">Calzado</Nav.Link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li> <hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                    </li>
                    <Nav.Link href="#">Indumentaria</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                    <CarWidget/>
                </Navbar>
            </div>
    )
}

export default NavBar
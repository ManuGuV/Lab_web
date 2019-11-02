import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

 class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Square It</Navbar.Brand>
                    <Link className="btn btn-outline-success" variant="outline-success" style = {{marginLeft: 'auto'}} to="/">Logout</Link>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
import React from 'react';
import {Navbar, Button} from 'react-bootstrap';


 class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Square It</Navbar.Brand>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
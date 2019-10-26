import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


 class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Square It</Navbar.Brand>
                    <Button variant="outline-success" style = {{marginLeft: 'auto'}}>Signup</Button>
                    <Button component={ Link } to="/MyFiles" variant="outline-success" style = {{marginLeft: '5px'}}>Login</Button>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
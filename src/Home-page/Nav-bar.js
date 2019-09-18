import React from 'react';
import {Navbar, Button} from 'react-bootstrap';


 class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Square It</Navbar.Brand>
                    <Button variant="outline-success" style = {{marginLeft: 'auto'}}>Signup</Button>
                    <Button variant="outline-success" style = {{marginLeft: '5px'}}>Login</Button>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
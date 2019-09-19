import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import { browserHistory } from "react-router";


 class NavBar extends React.Component {

    /*goHome(){
        browserHistory.push("../Home-page/Home")
    }*/

    render() {

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Square It</Navbar.Brand>
                    <Button variant="contained" style = {{marginLeft: 'auto'}} onClick={() => { document.location.href = "details.html"; }}>Back</Button>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
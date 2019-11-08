import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Link className="btn" variant="outline-success" style = {{marginLeft: 'auto'}} to="/MyFiles">Back</Link>
                </Navbar>
             </div>
        )
    }

 }

 export default NavBar;
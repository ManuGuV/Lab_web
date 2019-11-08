import React from 'react';
import NavBar from './Nav-bar';
import Menu from './Menu';
import Image from './Upload';
import DnD from './Dropzone';
import {Row, Col} from 'react-bootstrap';


function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Row className="w-100 m-0">
        <Col/>
        <Col md={7} lg={5}>
          <div className="d-flex justify-center flex-column">
            <Image></Image>
          </div>
        </Col>
        <Col/>
      </Row>
    </div>
  );
}

export default Home;

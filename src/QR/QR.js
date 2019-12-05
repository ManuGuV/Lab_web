import React from 'react';
import NavBar from './Nav-bar';
import Code from './Code';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class QR extends React.Component {
  
  render () {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Code></Code>
      </div>
    );
  }
}


export default QR;
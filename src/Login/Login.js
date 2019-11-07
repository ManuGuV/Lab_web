import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const loginCard = {
  position: 'absolute',
  left: '10%',
  right: '10%',
  top: '15%',
  padding: '5%'
};

const formControl= {
  margin: '1%',
};

const formElement= {
  marginBottom: '7%'
};


class Login extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="Login">
        <NavBar></NavBar>
        <Paper style={loginCard}>
          <h4 style={formElement}>Sign In</h4>
          <div style={{display: 'flex', flexDirection: 'column'}}>
              <Input value={''} style={formElement} id="component-simple" placeholder="User"/>
              <Input value={''} style={formElement} id="component-simple" placeholder="Password"/>
              
              <Link className="btn btn-primary" variant="contained" to="/MyFiles">Sign In</Link>
          </div>
        </Paper>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    state: state.rootReducer,
  }
}

const mapDispatchToProps = {
  /*getContact,
  deleteContact,
  setCurrentContact,*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
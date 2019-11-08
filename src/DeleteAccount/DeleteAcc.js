import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteUser from '../Actions/deleteUser';

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
  marginBottom: '7%',
};


class DeleteAcc extends React.Component {
  constructor(props){
    super(props);
  }

  deleteAcc(user, pass) {
    var payload = [];
    payload[0] = user;
    payload[1] = pass;
    this.props.deleteUser(payload);
    console.log(payload);
  }

  render () {
    return (
      <div className="Login">
        <NavBar></NavBar>
        <Paper style={loginCard}>
          <h4 style={formElement}>You are about to delete your account!</h4>
          <div style={{display: 'flex', flexDirection: 'column'}}>
              <Input style={formElement} id="user" placeholder="User"/>
              <Input style={formElement} id="password" placeholder="Password"/>
              
              <Link className="btn btn-danger" variant="contained" to="/" onClick={() => this.deleteAcc(document.getElementById("user").value, document.getElementById("password").value)}>DELETE ACCOUNT</Link>
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
  deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAcc);
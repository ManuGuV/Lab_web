import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import addUser from '../Actions/addUser';
import User from '../classes/User';

const signupCard = {
    position: 'absolute',
    left: '15%',
    top: '15%',
    padding: '5%',
    width: '70%'
};

const formElement = {
    marginBottom: '1%',
};

const dataColumn = {
    margin: '3%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
};

const toHome = false;

class Signup extends React.Component {

    addUser(name, lastName, password, passwordConfirm, email) {

        if(password == passwordConfirm) {
            var newUser = new User(name, lastName, password, email);
            this.props.addUser(newUser);
            this.setState({ state: this.state });
            alert("User created");
            console.log(this.props.state.userArr);
        }else{
            alert("Password does not match");
        } 
    }

    render () {
        console.log("state: %j", this.props.state.fileArr);
        return (
            <div className="Signup">
              <NavBar></NavBar>
              <Paper style={signupCard}>
                <h4 style={formElement}>Sign Up</h4>
        
                <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Personal Data</h5>
        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={dataColumn}>
                        <Input style={formElement} id="name" placeholder="Name"/>
                        <Input style={formElement} id="email" placeholder="email"/>
                    </div>
                    <div style={dataColumn}>
                        <Input style={formElement} id="lastName" placeholder="Last Name"/>
                    </div>
                </div>
        
                <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Password</h5>
        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={dataColumn}>
                        <Input style={formElement} type="password" id="password" placeholder="New Password"/>
                        <Input style={formElement} type="password" id="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                </div>
                
                <Link className="btn btn-primary" variant="contained" style={{float: 'right', marginRight: '3%'}} to="/" onClick={() => this.addUser(document.getElementById("name").value, document.getElementById("lastName").value, document.getElementById("password").value, document.getElementById("confirmPassword").value, document.getElementById("email").value)}>Sign Up</Link>
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
    addUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props){
    super(props);
  }

  useStyles = makeStyles (theme => ({
    loginCard : {
        position: 'absolute',
        left: '40%',
        top: '30%',
        padding: '5%'
    },
    formControl: {
        margin: theme.spacing(1),
    },
    formElement: {
        marginBottom: theme.spacing(3)
    }

  }));

  render () {
    return (
      <div className="Login">
        <NavBar></NavBar>
        <Paper className={this.useStyles.loginCard}>
          <h4 className={this.useStyles.formElement}>Sign In</h4>
          <div style={{display: 'flex', flexDirection: 'column'}}>
              <Input value={''} className={this.useStyles.formElement} id="component-simple" placeholder="User"/>
              <Input value={''} className={this.useStyles.formElement} id="component-simple" placeholder="Password"/>
              <Button variant="contained" color="primary">Sign In</Button>
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
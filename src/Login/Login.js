import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles (theme => ({
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

function Login() {

    const classes = useStyles();

  return (
    <div className="Login">
      <NavBar></NavBar>
      <Paper className={classes.loginCard}>
        <h4 className={classes.formElement}>Sign In</h4>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Input value={''} className={classes.formElement} id="component-simple" placeholder="User"/>
            <Input value={''} className={classes.formElement} id="component-simple" placeholder="Password"/>
            <Button variant="contained" color="primary">Sign In</Button>
        </div>
      </Paper>
    </div>
  );
}

export default Login;
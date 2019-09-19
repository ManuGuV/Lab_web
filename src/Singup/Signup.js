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
    signupCard : {
        position: 'absolute',
        left: '15%',
        top: '15%',
        padding: '5%',
        width: '70%'
    },
    formControl: {
        margin: theme.spacing(1),
    },
    formElement: {
        marginBottom: theme.spacing(3)
    },

    dataColumn : {
        margin: '3%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }

}));

function Signup() {

    const classes = useStyles();

  return (
    <div className="Signup">
      <NavBar></NavBar>
      <Paper className={classes.signupCard}>
        <h4 className={classes.formElement}>Sign Up</h4>

        <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Personal Data</h5>

        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className={classes.dataColumn}>
                <Input className={classes.formElement} id="component-simple" placeholder="Name"/>
                <Input className={classes.formElement} id="component-simple" placeholder="email"/>
            </div>
            <div className={classes.dataColumn}>
                <Input className={classes.formElement} id="component-simple" placeholder="Last Name"/>
            </div>
        </div>

        <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Password</h5>

        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className={classes.dataColumn}>
                <Input className={classes.formElement} type="password" id="component-simple" placeholder="New Password"/>
                <Input className={classes.formElement} type="password" id="component-simple" placeholder="Confirm Password"/>
            </div>
        </div>
        
        <Button style={{float: 'right', marginRight: '3%'}} variant="contained" color="primary">Sign Up</Button>
      </Paper>
    </div>
  );
}

export default Signup;
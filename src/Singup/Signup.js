import React from 'react';
import NavBar from './Nav-bar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Signup extends React.Component {

    useStyles = makeStyles (theme => ({
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

    render () {
        console.log("state: %j", this.props.state.fileArr);
        return (
            <div className="Signup">
              <NavBar></NavBar>
              <Paper className={this.useStyles.signupCard}>
                <h4 className={this.useStyles.formElement}>Sign Up</h4>
        
                <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Personal Data</h5>
        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={this.useStyles.dataColumn}>
                        <Input className={this.useStyles.formElement} id="component-simple" placeholder="Name"/>
                        <Input className={this.useStyles.formElement} id="component-simple" placeholder="email"/>
                    </div>
                    <div className={this.useStyles.dataColumn}>
                        <Input className={this.useStyles.formElement} id="component-simple" placeholder="Last Name"/>
                    </div>
                </div>
        
                <h5 style={{marginLeft: '3%', marginTop: '3%'}}>Password</h5>
        
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={this.useStyles.dataColumn}>
                        <Input className={this.useStyles.formElement} type="password" id="component-simple" placeholder="New Password"/>
                        <Input className={this.useStyles.formElement} type="password" id="component-simple" placeholder="Confirm Password"/>
                    </div>
                </div>
                
                <Button style={{float: 'right', marginRight: '3%'}} variant="contained" color="primary">Sign Up</Button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
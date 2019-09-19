import React from 'react';
import upload from '../image.jpg';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from 'react-bootstrap';

 class Image extends React.Component {

    render() {

        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img src={upload} alt="upload" style={{height:'20%', width: '20%', paddingTop: '15px'}} />
                </div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Want a password added to the file?"
                    />
                    </FormGroup>
                </div>
                <Button variant="success" style = {{marginLeft: 'auto'}}>Share</Button>
            </div>
        )
    }

 }

 export default Image;
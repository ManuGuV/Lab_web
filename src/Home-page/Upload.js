import React from 'react';
import upload from '../image.jpg';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from 'react-bootstrap';
import DnD from './Dropzone';

 class Image extends React.Component {

    render() {

        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '15px'}}>
                    <DnD></DnD>
                    <h2>Click the image to upload your file here!</h2>
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
                <Button onClick={() => alert('File Shared')} variant="success" style = {{marginLeft: 'auto'}}>Share</Button>
            </div>
        )
    }

 }

 export default Image;
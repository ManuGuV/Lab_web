import React from 'react';
import upload from '../image.jpg';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from 'react-bootstrap';
import DnD from './Dropzone';
import File from '../classes/Files';
import { connect } from 'react-redux';
import addFile from '../Actions/addFile';
import Paper from '@material-ui/core/Paper';
import MyDropZone from './Dropzone';

 class Image extends React.Component {

    addFile(name, type, date, path) {
        var file = new File(this.props.state.fileArr.length, name, type, date, path);
        this.props.addFile(file);
        this.setState({ state: this.state });
    }

    render() {

        return (
            <div>
                <Paper className="p-5">
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '15px'}}>
                    <MyDropZone></MyDropZone>
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
                </Paper>
            </div>
        )
    }

 }

 const mapStateToProps = (state) => {
    return {
      state: state.rootReducer,
    }
  }
  
  const mapDispatchToProps = {
    addFile,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Image);


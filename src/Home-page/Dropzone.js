import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Background from '../image.jpg';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import addFile from '../Actions/addFile';
import Files from '../classes/Files';
import { Storage } from 'aws-amplify';
import { Button, Alert } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { timeout } from 'q';
import setInitFiles from '../Actions/setInitFiles';

class MyDropzone extends Component {
  filename = null;
  fileAWS = { fileURL: '', file: '', filename: '', path: ''};

  constructor(droppedFile, dropped){
    super(droppedFile, dropped);
    this.setInitFiles();
    dropped = false;
  }

  setInitFiles() {
    this.props.state.fileArr = [];
    Storage.list('',{ level: 'protected' })
    .then(result => this.props.setInitFiles(result))
    .catch(err => console.log(err));
  
    console.log(this.props.state.fileArr);
  }

  onDrop = (acceptedFiles) => {
    this.filename = acceptedFiles.name;
    console.log(acceptedFiles);
  }

  addFile(droppedFile){

    var path = droppedFile;
    var type = "";
    var date = new Date;
    var afterDot = false;
    for(var i=0; i<path.length; i++)
    {
      if(path.charAt(i) == '.')
      {
        afterDot = true;
      }

      if(afterDot == true){
        type = type.concat(path.charAt(i));
      }
    }

    var file = new Files(this.props.state.fileArr.length, path, type, String(date), path);

    this.props.addFile(file);
    this.setState({ state: this.state });

    
    this.dropped = true;
    
  }

  handleChange(e) {
    console.log("E%j",e);
    var binaryData = [];

    binaryData.push(e);
    this.fileAWS.fileURL = URL.createObjectURL(new Blob(binaryData, {type: "application/txt"}));
  
    //this.fileAWS.fileURL = URL.createObjectURL(e);
    this.fileAWS.file = e;
    this.fileAWS.filename = e.name;
    this.fileAWS.path = e.path;
    document.getElementById("droppedStatus").innerHTML = e.path;
    
  }
  saveFile = () => {
    Storage.put(this.fileAWS.filename, this.fileAWS.file, {
      level: 'protected',
      contentType: 'text/plain'
    })
    .then(() => {
        console.log("Successful save");
        this.fileAWS = { fileURL: '', file: '', filename: ''};
    }).catch(err => {
        console.log("Error ",err);
    })

    this.addFile(this.fileAWS.path);
    alert("File Uploaded!\nView your file in the My Files section");
  }

  render() {
    return (
      <div>
      <Dropzone onDrop={async ([file]) => {
        
        var reader = new FileReader();
        //reader.readAsText(file);
        console.log("File: %j",file);
        //var str = 
        reader.readAsText(file);
        //console.log("Reader: "+reader);
        reader.onload = function(e) {
          var contents = e.target.result;
          //console.log(e.target.files);
          localStorage.setItem('reader', e);
        };
        
        this.handleChange(file);
        
        
}}/*onDrop={files => {this.handleChange(files)}}*/>
        {({ getRootProps, getInputProps }) => (
          <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center', backgroundImage: 'URL("https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png")', backgroundSize: '150px', height: '150px', width: '150px', margin: '0 auto', backgroundRepeat: 'no-repeat'}}>
            <div style={{height: '150px', width: '150px'}}
              {...getRootProps({
                className: 'dropzone',
                onDrop: event => event.stopPropagation(),
                onDrop: event => event.preventDefault()
              })}
            >
              <input {...getInputProps()}/>
              <p style={{height: '150px', width: '150px'}}></p>
            </div>
          </div>
        )}
      </Dropzone>
      <p id="droppedStatus">No file</p>
      <Button variant="outline-success" color="primary" onClick={() => this.saveFile()}>Save</Button>
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
  addFile,
  setInitFiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDropzone);
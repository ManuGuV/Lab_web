import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Background from '../image.jpg';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import addFile from '../Actions/addFile';
import Files from '../classes/Files';

class MyDropzone extends Component {
  filename = null;

  constructor(droppedFile, dropped){
    super(droppedFile, dropped);

    dropped = false;
  }

  onDrop = (acceptedFiles) => {
    this.filename = acceptedFiles.name;
    console.log(acceptedFiles);
  }

  addFile(droppedFile){

    var path = droppedFile[0].path;

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

    document.getElementById("droppedStatus").innerHTML = path;
    this.dropped = true;
  }

  render() {
    return (
      <div>
      <Dropzone onDrop={async ([file]) => {
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    console.log(contents);
  };
  reader.readAsText(file);
}}/*onDrop={files => {this.addFile(files)}}*/>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDropzone);
import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class MyDropzone extends Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  render() {
    return (
      <div className="text-center mt-5">
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default MyDropzone;
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Background from '../image.jpg';
import { useDropzone } from 'react-dropzone';

class MyDropzone extends Component {
  filename = null;

  onDrop = (acceptedFiles) => {
    this.filename = acceptedFiles.name;
    console.log(acceptedFiles);
  }

  render() {
    return (
      <div>
      <Dropzone onDrop={files => console.log(files)}>
        {({ getRootProps, getInputProps }) => (
          <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center', backgroundImage: 'URL("https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png")', backgroundSize: '150px', height: '150px', width: '150px', margin: '0 auto', backgroundRepeat: 'no-repeat'}}>
            <div style={{height: '150px', width: '150px'}}
              {...getRootProps({
                className: 'dropzone',
                onDrop: event => event.stopPropagation()
              })}
            >
              <input {...getInputProps()}/>
              <p style={{height: '150px', width: '150px'}}></p>
            </div>
          </div>
        )}
      </Dropzone>
      </div>
      
      
      
    );
  }
}

export default MyDropzone;
import React from 'react';
import QRCode from 'qrcode.react';
import { Storage } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(config);

 class Code extends React.Component {

    state = { fileURL: ''};
    
    componentDidMount() {
        var currentFile = localStorage.getItem('currentFile');
        Storage.get(currentFile).then(data => {
            this.setState({fileURL:data});
            console.log("Data",data);

        }).catch(err => {
            console.log("Error",err);
        });
    }

    downloadQR() {
        var reader = new FileReader();
        //reader.readAsText(file);
        var file = localStorage.getItem('reader');
        console.log("ReaderQR: "+JSON.stringify(file));
        this.handleChange(file);
            
    };
    
    render() {
        
        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                <QRCode id="qr" value={this.state.fileURL} size={500}/>
            
                </div>
            </div>
            
        )
    }

 }

 export default withAuthenticator(Code, {includeGreetings: true});
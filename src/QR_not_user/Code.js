import React from 'react';
import QRCode from 'qrcode.react';
import { Storage } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(config);

 class Code extends React.Component {

    fileAWS = { fileURL: '', file: '', filename: ''};
    

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
                <QRCode id="qr" value=/*{localStorage.getItem('reader')}*/'https://files-consulta194533-dev.s3.amazonaws.com/9797-linux-vs-windows-1366x768-computer-wallpaper.jpg' />
                
                <a onClick={this.downloadQR()}> Download QR </a>
                </div>
            </div>
            
        )
    }

 }

 export default withAuthenticator(Code, {includeGreetings: true});
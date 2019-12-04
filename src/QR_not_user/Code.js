import React from 'react';
import QRCode from 'qrcode.react';

 class Code extends React.Component {

    downloadQR() {
        var reader = new FileReader();
        //reader.readAsText(file);
        var file = localStorage.getItem('reader')
        console.log("ReaderQR: "+JSON.stringify(file));    
    };
    
    render() {
        
        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                <QRCode id="qr" value={localStorage.getItem('reader')} />
                
                <a onClick={this.downloadQR()}> Download QR </a>
                </div>
            </div>
            
        )
    }

 }

 export default Code;
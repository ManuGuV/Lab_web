import React from 'react';
import QRCode from 'qrcode.react';

 class Code extends React.Component {
    
    downloadQR = () => {
        const canvas = document.getElementById("qr");
        const pngUrl = canvas
            .toDataURL("/home/rodrigo/Downloads/prueba_funcionalidad_7.py")
            .replace("/home/rodrigo/Downloads/prueba_funcionalidad_7.py", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "/home/rodrigo/Downloads/prueba_funcionalidad_7.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    
    render() {
        
        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                <QRCode id="qr" value="/home/rodrigo/Downloads/prueba_funcionalidad_7.py" />
                <a onClick={this.downloadQR()}> Download QR </a>
                </div>
            </div>
        )
    }

 }

 export default Code;
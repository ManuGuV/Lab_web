import React from 'react';
import QR from '../QR.png';

 class Code extends React.Component {

    render() {

        return (
            <div>
                <div className="d-flex flex-column" style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img src={QR} alt="upload" style={{height:'20%', width: '20%'}} />
                </div>
            </div>
        )
    }

 }

 export default Code;
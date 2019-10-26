import React from 'react';
import NavBar from './Nav-bar';
import Code from './Code';
import { connect } from 'react-redux';

class QR extends React.Component {
  constructor(props){
    super(props);
  }
  
  render () {
    console.log("state: %j", this.props.state.fileArr);
    return (
      <div className="App">
        <NavBar></NavBar>
        <Code></Code>
        <div>
            <h2 style={{color:'blue', textDecorationLine:'underline'}}>https://github.com/QR</h2>
        </div>
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
  /*getContact,
  deleteContact,
  setCurrentContact,*/
}

export default connect(mapStateToProps, mapDispatchToProps)(QR);
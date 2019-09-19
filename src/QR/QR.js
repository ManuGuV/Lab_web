import React from 'react';
import NavBar from './Nav-bar';
import Code from './Code';

function Home() {
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

export default Home;
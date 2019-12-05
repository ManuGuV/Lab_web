import React from 'react';
import NavBar from './Nav-bar';
import Filter from './Filters';
import Files from './Files';
import { withAuthenticator } from 'aws-amplify-react';


function MyFiles() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Files></Files>
    </div>
  );
}

export default withAuthenticator(MyFiles, {includeGreetings: true});
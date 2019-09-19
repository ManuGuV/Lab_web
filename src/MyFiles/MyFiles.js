import React from 'react';
import NavBar from './Nav-bar';
import Filter from './Filters';
import Files from './Files';


function MyFiles() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Filter></Filter>
      <Files></Files>
    </div>
  );
}

export default MyFiles;
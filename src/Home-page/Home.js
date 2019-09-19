import React from 'react';
import NavBar from './Nav-bar';
import Menu from './Menu';
import Image from './Upload';
import DnD from './Dropzone';

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Menu></Menu>
      <Image></Image>
      <DnD></DnD>
    </div>
  );
}

export default Home;

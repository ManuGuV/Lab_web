import React from 'react';
import logo from './logo.svg';
import Home from './Home-page/Home';
import Login from './Login/Login';
import MyFiles from './MyFiles/MyFiles';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import QR from './QR/QR'
import Signup from './Singup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <MyFiles></MyFiles>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React from 'react';
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
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/MyFiles' component={MyFiles} />
          <Route exact path='/QR' component={QR} />
          <Route exact path='/Signup' component={Signup} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

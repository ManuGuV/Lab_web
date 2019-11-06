import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ExpansionPanelActions } from '@material-ui/core';
import NavBar from './Home-page/Nav-bar';
import TestRenderer from 'react-test-renderer'; // ES6

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
});

/*it('render correctly nav-bar component', () => {  
  const navBarComponent = TestRenderer.create(<NavBar />).toJSON();
  expect(navBarComponent).toMatchSnapshot();
});*/
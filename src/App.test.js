import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ExpansionPanelActions } from '@material-ui/core';
import NavBar from './Home-page/Nav-bar';
import TestRenderer from 'react-test-renderer'; // ES6
import rootReducer from './reducers/rootReducer';
import { connect } from 'react-redux';
import Files from './MyFiles/Files';
import { Provider } from 'react-redux';
import MyFiles from './MyFiles/MyFiles';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
});

/*test('render correctly nav-bar component', () => {  
  const navBarComponent = TestRenderer.create(<NavBar />);
  expect(navBarComponent).toMatchSnapshot();
});*/
it('renders welcome message', () => {
  const { Files } = render(<MyFiles />);
  expect(getByText('Square It')).toBeInTheDocument();
});

const mapStateToProps = (state) => {
  return {
    state: state.rootReducer,
  }
}

export default connect(mapStateToProps)(test);
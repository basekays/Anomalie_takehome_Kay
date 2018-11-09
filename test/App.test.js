import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> test', () => {
  it('should render App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

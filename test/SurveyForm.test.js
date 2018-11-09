import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import AppBar from '@material-ui/core/AppBar';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import ProgressBar from '../client/src/components/ProgressBar';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SurveyForm from '../client/src/components/SurveyForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SurveyForm /> test', () => {
  it('should render three children components', () => {
    const component = shallow(<SurveyForm />);
    expect(component.props().children.length).toEqual(3);
  });

  it('should have AppBar component', () => {
    const component = shallow(<SurveyForm />);
    expect(component.props().children[0].type.displayName).toEqual('WithStyles(AppBar)');
  });

  it('should have ProgressBar component with default activeStep prop', () => {
    const component = shallow(<SurveyForm />);
    expect(component.props().children[1].props.activeStep).toBe(0);
  })

  it('should have Grid item', () => {
    const component = shallow(<SurveyForm />);
    expect(component.props().children[2].props.children.type.displayName).toEqual('WithStyles(Grid)');
  })
});

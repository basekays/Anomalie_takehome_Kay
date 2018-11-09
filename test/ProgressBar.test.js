import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SurveyFormConstants from '../client/src/constants/SurveyFormConstants';
import ProgressBar from '../client/src/components/ProgressBar';

const {BUDGET, DESCRIPTION, LABELS, MESSAGE} = SurveyFormConstants;

Enzyme.configure({ adapter: new Adapter() });

describe('<SurveyItemBudget /> test', () => {
  it('should have steps of "budget", "silhouette", and "wedding date"', () => {
    const component = shallow(<ProgressBar />);
    expect(component.props().children[0].key).toEqual('Budget');
    expect(component.props().children[1].key).toEqual('Silhouette');
    expect(component.props().children[2].key).toEqual('Wedding Date');
  })

  it('should render a stepper to display progress', () => {
    const component = shallow(<ProgressBar />);
    expect(component.props().children[0].type.displayName).toEqual('WithStyles(Step)');
    expect(component.props().children[1].type.displayName).toEqual('WithStyles(Step)');
    expect(component.props().children[2].type.displayName).toEqual('WithStyles(Step)');
  })
});

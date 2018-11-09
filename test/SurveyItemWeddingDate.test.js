import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SurveyFormConstants from '../client/src/constants/SurveyFormConstants';
import SurveyItemWeddingDate from '../client/src/components/SurveyItemWeddingDate';

const {BUTTON, DESCRIPTION, LABELS} = SurveyFormConstants;
const today = new Date().toISOString().split('T')[0];

Enzyme.configure({ adapter: new Adapter() });

describe('<SurveyItemWeddingDate /> test', () => {
  it('should render a h2 label called "Wedding Date"', () => {
    const component = shallow(<SurveyItemWeddingDate />);
    expect(component.props().children[0].type).toEqual('h2');
    expect(component.props().children[0].props.children).toEqual(LABELS.WEDDING_DATE);
  })

  it('should render a question about preferred wedding date', () => {
    const component = shallow(<SurveyItemWeddingDate />);
    const {children} = component.props();
    expect(children[1].type).toEqual('h3');
    expect(children[1].props.children).toEqual(DESCRIPTION.WEDDING_DATE);
  })

  it('should render three buttons for skip and submit', () => {
    const component = shallow(<SurveyItemWeddingDate />);
    const {children} = component.props();
    expect(children[4].type.displayName).toEqual('WithStyles(Button)');
    expect(children[4].props.children).toEqual(BUTTON.SKIP_FOR_NOW);
    expect(children[5].type.displayName).toEqual('WithStyles(Button)');
    expect(children[5].props.children).toEqual(BUTTON.SUBMIT);
  })

  it('should render a form for wedding date, with current date as default', () => {
    const component = shallow(<SurveyItemWeddingDate />);
    const {children} = component.props();
    expect(children[2].type).toEqual('form');
    expect(children[2].props.children.props.className).toEqual('weddingDate');
    expect(children[2].props.children.props.defaultValue).toEqual(today);
  })
});

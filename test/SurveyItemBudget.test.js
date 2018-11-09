import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SurveyFormConstants from '../client/src/constants/SurveyFormConstants';
import SurveyItemBudget from '../client/src/components/SurveyItemBudget';

const {BUDGET, DESCRIPTION, LABELS, MESSAGE} = SurveyFormConstants;

Enzyme.configure({ adapter: new Adapter() });

describe('<SurveyItemBudget /> test', () => {
  it('should render a h2 label called "Budget"', () => {
    const component = shallow(<SurveyItemBudget />);
    expect(component.props().children[0].type).toEqual('h2');
    expect(component.props().children[0].props.children).toEqual(LABELS.BUDGET);
  })

  it('should render a question about budget of the gown', () => {
    const component = shallow(<SurveyItemBudget />);
    const {children} = component.props();
    expect(children[1].type).toEqual('h3');
    expect(children[1].props.children).toEqual(DESCRIPTION.BUDGET);
  })

  it('should render List items', () => {
    const component = shallow(<SurveyItemBudget />);
    expect(component.props().children[2].type.displayName).toBe('WithStyles(List)');
  })

  it('should render five list items with unique keys for budget options', () => {
    const component = shallow(<SurveyItemBudget />);
    const {children} = component.props().children[2].props;
    expect(children.length).toEqual(5);
    expect(children[0].key).toEqual('RANGE_1');
    expect(children[1].key).toEqual('RANGE_2');
    expect(children[2].key).toEqual('RANGE_3');
    expect(children[3].key).toEqual('RANGE_4');
    expect(children[4].key).toEqual('RANGE_5');
  })

  it('should render five list items listing ranges', () => {
    const component = shallow(<SurveyItemBudget />);
    const {children} = component.props().children[2].props;
    expect(children.length).toEqual(5);
    expect(children[0].props.children.props.children).toEqual(BUDGET.RANGE_1);
    expect(children[1].props.children.props.children).toEqual(BUDGET.RANGE_2);
    expect(children[2].props.children.props.children).toEqual(BUDGET.RANGE_3);
    expect(children[3].props.children.props.children).toEqual(BUDGET.RANGE_4);
    expect(children[4].props.children.props.children).toEqual(BUDGET.RANGE_5);
  })

  it('should render a message informing brides about budget and gowns', () => {
    const component = shallow(<SurveyItemBudget />);
    expect(component.props().children[3].props.children).toEqual(MESSAGE.BUDGET);
  })
});

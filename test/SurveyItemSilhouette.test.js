import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SurveyFormConstants from '../client/src/constants/SurveyFormConstants';
import SurveyItemSilhouette from '../client/src/components/SurveyItemSilhouette';

const {BUDGET, BUTTON, DESCRIPTION, LABELS, SILHOUETTE} = SurveyFormConstants;

Enzyme.configure({ adapter: new Adapter() });

describe('<SurveyItemSilhouette /> test', () => {
  it('should render a h2 label called "Silhouette"', () => {
    const component = shallow(<SurveyItemSilhouette />);
    expect(component.props().children[0].type).toEqual('h2');
    expect(component.props().children[0].props.children).toEqual(LABELS.SILHOUETTE);
  })

  it('should render a question about preferred silhouette', () => {
    const component = shallow(<SurveyItemSilhouette />);
    const {children} = component.props();
    expect(children[1].type).toEqual('h3');
    expect(children[1].props.children).toEqual(DESCRIPTION.SILHOUETTE);
  })

  it('should render three buttons for edit, skip, and save', () => {
    const component = shallow(<SurveyItemSilhouette />);
    const {children} = component.props();
    expect(children[4].type.displayName).toEqual('WithStyles(Button)');
    expect(children[4].props.children).toEqual(BUTTON.EDIT_BUDGET);
    expect(children[5].type.displayName).toEqual('WithStyles(Button)');
    expect(children[5].props.children).toEqual(BUTTON.SKIP_FOR_NOW);
    expect(children[6].type.displayName).toEqual('WithStyles(Button)');
    expect(children[6].props.children).toEqual(BUTTON.SAVE_AND_CONTINUE);
  })

  it('should render Grid list', () => {
    const component = shallow(<SurveyItemSilhouette />);
    expect(component.props().children[3].type.displayName).toEqual('WithStyles(GridList)');
  })

  it('should render images with silhouette names', () => {
    const component = shallow(<SurveyItemSilhouette />);
    const {children} = component.props().children[3].props;
    expect(children[0].key).toEqual('SHEATH');
    expect(children[1].key).toEqual('FIT_FLARE');
  })

  it('should render images with silhouette names', () => {
    const component = shallow(<SurveyItemSilhouette />);
    const {children} = component.props().children[3].props;
    expect(children[0].key).toEqual('SHEATH');
    expect(children[0].props.children[0].props.src).toEqual(SILHOUETTE.SHEATH.IMG);
    expect(children[1].key).toEqual('FIT_FLARE');
    expect(children[1].props.children[0].props.src).toEqual(SILHOUETTE.FIT_FLARE.IMG);
  })
});

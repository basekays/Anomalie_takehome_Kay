import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { Component } from 'react';
import SurveyFormConstants from '../constants/SurveyFormConstants';
import Tooltip from '@material-ui/core/Tooltip';

const {
  BUTTON,
  DESCRIPTION,
  LABELS,
  MESSAGE,
  NOT_AVAILABLE,
  SILHOUETTE,
  TOOLTIP,
} = SurveyFormConstants;

class SurveyItemSilhouette extends React.Component {
  state = {
    selectedSilhouettes: [],
  }

  createOptions(budget) {
    const {selectedSilhouettes} = this.state;
    let availableOptions;

    switch(budget) {
      case 'RANGE_4':
      case 'RANGE_5':
        availableOptions = Object.keys(SILHOUETTE);
        break;
      case 'RANGE_2':
      case 'RANGE_3':
        availableOptions = Object.keys(SILHOUETTE).filter(style => style != 'BALL_GOWN');
        break;
      default:
        availableOptions = Object.keys(SILHOUETTE).filter(style => style == 'SHEATH' || style == 'FIT_FLARE');
    }

    return (
      availableOptions.map((style) =>
        <GridListTile key={style} cols={1} style={{height: '350px', padding: '20px'}}>
          <img
            src={SILHOUETTE[style]['IMG']}
            onClick={() => {this.handleClick(SILHOUETTE[style]['NAME'])}}
          />
          <GridListTileBar
            title={SILHOUETTE[style]['NAME']}
            actionIcon={
              <Tooltip
                title={
                  selectedSilhouettes.includes(SILHOUETTE[style]['NAME'])
                  ? TOOLTIP.REMOVE : TOOLTIP.ADD
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={selectedSilhouettes.includes(SILHOUETTE[style]['NAME'])}
                      value={SILHOUETTE[style]['NAME']}
                      onChange={() => {this.handleClick(SILHOUETTE[style]['NAME'])}}
                      />
                  }
                />
              </Tooltip>
            }
          />
        </GridListTile>
      )
    )
  }

  handleClick(name) {
    const {selectedSilhouettes} = this.state;
    if (selectedSilhouettes.includes(name)) {
      this.setState({
        selectedSilhouettes: selectedSilhouettes.filter(function(style) {
          return style != name
        }
      )});
    } else {
      this.setState(prevState => ({
        selectedSilhouettes: [...prevState.selectedSilhouettes, name]
      }));
    }
  }

  handleSkip() {
    this.setState({
      selectedSilhouettes: NOT_AVAILABLE,
    }, () => {
      this.props.updateSilhouette(this.state.selectedSilhouettes);
    });
  }

  handleSubmit() {
    this.props.updateSilhouette(this.state.selectedSilhouettes);
  }

  renderOptions(budget) {
    const {selectedSilhouettes} = this.state;
    const options = this.createOptions(budget);
    return options;
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{marginBottom: '20px'}}>{LABELS.SILHOUETTE}</h2>
        <h3 style={{marginBottom: '20px'}}>{DESCRIPTION.SILHOUETTE}</h3>
        {
          this.props.budget == 'RANGE_1'
          ? (<h6>{MESSAGE.MISSING_TWO_SILHOUETTES}</h6>)
          : this.props.budget == 'RANGE_2' || this.props.budget == 'RANGE_3'
            ? (<h6>{MESSAGE.MISSING_ONE_SILHOUETTES}</h6>)
            : null
        }
        <GridList>
          {this.renderOptions(this.props.budget)}
        </GridList>
        <Button
          style={{marginLeft: '30px'}}
          onClick={() => {this.props.returnToPreviousItem('backToBudget')}}
        >
          {BUTTON.EDIT_BUDGET}
        </Button>
        <Button
          style={{marginLeft: '20px', marginRight: '20px'}}
          onClick={() => {this.handleSkip()}}
        >
          {BUTTON.SKIP_FOR_NOW}
        </Button>
        <Button
          variant="contained"
          style={{marginTop: '20px', marginBottom: '20px'}}
          onClick={() => this.handleSubmit()}
        >
          {BUTTON.SAVE_AND_CONTINUE}
        </Button>
      </div>
    )
  }
}

export default SurveyItemSilhouette;

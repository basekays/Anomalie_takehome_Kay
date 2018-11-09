import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React, { Component } from 'react';
import SurveyFormConstants from '../constants/SurveyFormConstants';

const { BUDGET, DESCRIPTION, LABELS, MESSAGE } = SurveyFormConstants;

class SurveyItemBudget extends React.Component {
  handleClick(value) {
    this.props.updateBudget(value);
  }

  renderOptions() {
    const options = Object.keys(BUDGET).map((range) =>
      <ListItem style={{display:'flex', justifyContent:'center'}} key={range}>
        <Button
          fullWidth={true}
          onClick={() => {this.handleClick(range)}}
          size="large"
          variant="outlined"
        >
          {BUDGET[range]}
        </Button>
      </ListItem>
    );
    return options;
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{marginBottom: '20px'}}>{LABELS.BUDGET}</h2>
        <h3 style={{marginBottom: '20px'}}>{DESCRIPTION.BUDGET}</h3>
        <List component="nav">
          {this.renderOptions()}
        </List>
        <h5>{MESSAGE.BUDGET}</h5>
      </div>
    )
  }
}

export default SurveyItemBudget;

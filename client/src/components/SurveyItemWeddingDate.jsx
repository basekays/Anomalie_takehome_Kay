import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import SurveyFormConstants from '../constants/SurveyFormConstants';
import TextField from '@material-ui/core/TextField';

const {
  BUTTON,
  DEFAULT,
  DESCRIPTION,
  LABELS,
  NOT_AVAILABLE,
  WARNING
} = SurveyFormConstants;

const today = new Date().toISOString().split('T')[0];

// Default date on the date picker
let defaultDate = new Date();
defaultDate.setMonth(defaultDate.getMonth() + 7);
defaultDate = defaultDate.toISOString().split('T')[0];

class SurveyItemWeddingDate extends React.Component {
  state = {
    weddingDate: null,
  }

  handleSubmit() {
    this.props.updateWeddingDate(this.state.weddingDate);
  }

  handleChange = (e) => {
    this.setState({
      weddingDate: e.target.value,
    });
  }

  handleSkip() {
    this.setState({
      weddingDate: NOT_AVAILABLE,
    }, () => {
      this.props.updateWeddingDate(this.state.weddingDate);
    });
  }

  render() {
    return (
      <div  style={{textAlign: 'center'}}>
        <h2 style={{marginBottom: '20px'}}>{LABELS.WEDDING_DATE}</h2>
        <h3 style={{marginBottom: '20px'}}>{DESCRIPTION.WEDDING_DATE}</h3>
        <form className='date' noValidate>
          <TextField
            className='weddingDate'
            defaultValue={today}
            id="date"
            onChange={this.handleChange}
            style={{marginTop: '30px'}}
            type="date"
          />
        </form>
        {this.state.weddingDate <= defaultDate && (
          <div style={{marginTop: '20px'}}>
            <h5>{WARNING.CUTOFF}</h5>
            <h5>{WARNING.RECOMMENDATION}</h5>
          </div>
        )}
        <Button
          style={{marginLeft: '30px', marginRight: '20px', marginTop: '30px'}}
          onClick={() => {this.handleSkip()}}
        >
          {BUTTON.SKIP_FOR_NOW}
        </Button>
        <Button
          onClick={() => this.handleSubmit()}
          variant="contained"
          style={{marginRight: '30px', marginTop: '30px'}}
        >
          {BUTTON.SUBMIT}
        </Button>
      </div>
    )
  }
}

export default SurveyItemWeddingDate;

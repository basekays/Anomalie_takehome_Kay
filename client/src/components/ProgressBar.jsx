import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import SurveyFormConstants from '../constants/SurveyFormConstants';

const { LABELS } = SurveyFormConstants;
const steps = [LABELS.BUDGET, LABELS.SILHOUETTE, LABELS.WEDDING_DATE];

class ProgressBar extends React.Component {
  render() {
    const {activeStep} = this.props;
    return (
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(step => {
          return (
            <Step key={step}>
              <StepLabel>
                {step}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    )
  }
}

export default ProgressBar;

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ProgressBar from './ProgressBar';
import React, { Component } from 'react';
import SurveyFormConstants from '../constants/SurveyFormConstants';
import SurveyItemBudget from './SurveyItemBudget';
import SurveyItemSilhouette from './SurveyItemSilhouette';
import SurveyItemWeddingDate from './SurveyItemWeddingDate';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const { DEFAULT, DESCRIPTION, LABELS, MESSAGE, NAME } = SurveyFormConstants;

class SurveyForm extends React.Component {
  state = {
    activeStep: 0,
    backToBudget: false,
    backToSilhouette: false,
    budget: DEFAULT,
    silhouette: DEFAULT,
    weddingDate: DEFAULT,
  };

  returnToPreviousItem = (item) => {
    this.setState({
      [item]: true,
    });
  }

  updateBudget(userInput) {
    this.setState({
      activeStep: 1,
      backToBudget: false,
      budget: userInput,
    });
  }

  updateSilhouette(userInput) {
    this.setState({
      activeStep: 2,
      silhouette: userInput,
    });
  }

  updateWeddingDate(userInput) {
    this.setState({
      activeStep: 3,
      weddingDate: userInput,
    });
  }

  renderSurveyItems() {
    const {
      backToBudget,
      backToSilhouette,
      budget,
      silhouette,
      weddingDate,
    } = this.state;
    if (budget == DEFAULT || backToBudget) {
      return <SurveyItemBudget updateBudget={this.updateBudget.bind(this)} />
    } else if (silhouette == DEFAULT || backToSilhouette) {
      return (
        <SurveyItemSilhouette
          updateSilhouette={this.updateSilhouette.bind(this)}
          returnToPreviousItem={this.returnToPreviousItem.bind(this)}
          budget={budget}
        />
      )
    } else if (weddingDate == DEFAULT) {
      return (
        <SurveyItemWeddingDate updateWeddingDate={this.updateWeddingDate.bind(this)} />
      )
    } else {
      return (
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <h2>{MESSAGE.SAVED}</h2>
          <h5>{MESSAGE.COMPLETE}</h5>
          <h5>{MESSAGE.NEXT_STEP}</h5>
        </div>
      )
    }
  }

  render() {
    const { budget, completionRate, silhouette, weddingDate} = this.state;
    return (
      <div style={{backgroundColor: "#f4f2f0ff"}}>
        <AppBar color="default" position="relative">
          <Toolbar style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Typography color="inherit" variant="h6">
              {NAME}
            </Typography>
          </Toolbar>
        </AppBar>
        <ProgressBar activeStep={this.state.activeStep}/>
        <div style={{flexGrow: 1}}>
          <Grid container justify='center' spacing={24}>
            <Grid item xs={12} sm={12} md={10} lg={6}>
              <Card className='card' style={{marginTop: '10px'}}>
                <CardContent>
                  <Typography color="inherit" variant="h6">
                    {this.renderSurveyItems()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default SurveyForm;

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from 'semantic-ui-react';
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
      budget: userInput,
      activeStep: 1,
      backToBudget: false,
    });
  }

  updateSilhouette(userInput) {
    this.setState({
      silhouette: userInput,
      activeStep: 2,
    });
  }

  updateWeddingDate(userInput) {
    this.setState({
      weddingDate: userInput,
      activeStep: 3,
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
          <h3>{MESSAGE.COMPLETE}</h3>
        </div>
      )
    }
  }

  render() {
    const { budget, silhouette, weddingDate, completionRate} = this.state;
    return (
      <div style={{backgroundColor: "#f4f2f0ff"}}>
        <AppBar position="relative" color="white">
          <Toolbar style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Typography variant="h6" color="inherit">
              {NAME}
            </Typography>
          </Toolbar>
        </AppBar>
        <ProgressBar activeStep={this.state.activeStep}/>
        <Grid centered columns={1} padded='vertically'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Card className='card'>
                <CardContent>
                  <Typography variant="h6" color="inherit">
                    {this.renderSurveyItems()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SurveyForm;

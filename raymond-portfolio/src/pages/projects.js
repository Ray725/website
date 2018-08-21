import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import SimpleCard from '../components/SimpleCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function ProjectPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <SimpleCard title="ViQuote" date="December 2017" description="Web application through which prospective health insurance buyers can get insurance cost predictions by submitting their information to a cloud-based machine-learning model" url="https://devpost.com/software/yhack2k17"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="20/20 Opioid" date="Fall 2017" description="Exploration tool and visualization of opioid epidemic data." url="https://jasonmohabir.github.io/AOE-opioid/totalOverdose.html"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="HALp Me Read" date="Fall 2017" description="Modified Amazon Alexa that parses the most salient points of research papers using NLP." url="https://devpost.com/software/halp-me-read-qgua3k"></SimpleCard>
      	</Grid>
        <Grid item xs={12}>
          <SimpleCard title="Logan High School Peer Tutor System" date="2016" description="Founded a peer tutor program based on online appointment scheduling in high school." url="https://lhspeertutorsystem.herokuapp.com/"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="Deprecated Personal Website" date="2016" description="Written in Ruby on Rails." url="https://raymondwangli.herokuapp.com/"></SimpleCard>
        </Grid>
      </Grid>
    </div>
  );
}

ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectPage);
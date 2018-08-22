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
          <SimpleCard title="Mercatura" date="Summer 2018" description="Automated bot that trades cryptocurrencies based on technical analysis. API endpoints written in Node.js, Python used for technical analysis, Telegram used for mobile alerts and status checks." url="https://ipfs.infura.io/ipfs/QmQ9L5LsPVbV4VdzPhFthaqFVoA8uXLypTZcuM41fQnnJ8"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="Vergil+" date="Spring 2018" description="Google Chrome extension that overhauls Columbia course registration, introduces features such as smart search and a major requirements checklist to registration process. Mostly leverages jQuery. Adopted by over 10% Columbia undergraduate community in initial launch." url="http://upgradevergil.com/"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="MTA SMS Bot" date="Spring 2018" description="Text-message bot designed to respond to users about delays or problems on the 1, 2, or 3 line in NYC. Uses Twilio services hosted on a Python Flask API endpoint. Won Columbia DevFest 2018 Twilio Award." url="https://github.com/rounakbera/mta-sms-bot"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="ViQuote" date="December 2017" description="Web application through which prospective health insurance buyers can get insurance cost predictions by submitting their information to a cloud-based machine-learning model. React.js frontend and Node.js backend with a Python Flask API endpoint. Deployed Keras neural network to Google Cloud." url="https://devpost.com/software/yhack2k17"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="CarmanHack" date="Fall 2017" description="Simple math game built in under two hours with Python's guizero library. Features Easy, Medium, and Hard difficulties, random problem generation, and score updating. Won Columbia's 2017 Carman Hall Hackathon." url="https://github.com/Ray725/CarmanHack17"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="20/20 Opioid" date="Fall 2017" description="Exploration tool and visualization of opioid epidemic data. Developed visualizations with Mapbox JavaScript library." url="https://jasonmohabir.github.io/AOE-opioid/totalOverdose.html"></SimpleCard>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard title="HALp Me Read" date="Fall 2017" description="Modified Amazon Alexa that parses the most salient points of research papers using NLP. Created chatbot mockups and integrated Google Cloud NLP services." url="https://devpost.com/software/halp-me-read-qgua3k"></SimpleCard>
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
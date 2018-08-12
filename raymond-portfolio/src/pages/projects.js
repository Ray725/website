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
          <SimpleCard title="Google" date="2001" description="mine" url="https://google.com"></SimpleCard>
        </Grid>
        <Grid item xs={6}>
          <SimpleCard title="Google" date="2001" description="mine" url="https://google.com"></SimpleCard>
        </Grid>
        <Grid item xs={6}>
          <SimpleCard title="Google" date="2001" description="mine" url="https://google.com"></SimpleCard>
      	</Grid>
      </Grid>
    </div>
  );
}

ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectPage);
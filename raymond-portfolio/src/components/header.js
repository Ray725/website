import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkButton from './LinkButton'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 8,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  background: {
    color: '#84FFFF'
  },
};

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Card color="black">
        <CardContent>
          <h2 style={{ margin: 0 }}>
            {siteTitle}
          </h2>
          <h3>
              Columbia University CS Major
          </h3>
          <Grid container spacing={16} alignContent='center'>
            <Grid item xs>
              <LinkButton route="/" buttonText="Home" color="default" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs>
              <LinkButton route="projects" buttonText="Projects" color="primary" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs>
              <LinkButton route="resume" buttonText="Resume" color="secondary" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs>
              <LinkButton route="contact" buttonText="Contact" color="default" variant="contained"></LinkButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  </div>
)

export default withStyles(styles)(Header)

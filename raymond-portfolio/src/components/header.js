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
      <Card>
        <CardContent>
          <h2 style={{ margin: 0 }}>
            {siteTitle}
          </h2>
          <h3>
              Columbia University CS Major
          </h3>
          <Grid container spacing={16} alignContent='center'>
            <Grid item xs>
              <LinkButton route="/" buttonText="About" color="default" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs>
              <LinkButton route="projects" buttonText="Projects" color="primary" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs>
              <LinkButton route="contact" buttonText="Contact" color="secondary" variant="outlined"></LinkButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  </div>
)

export default Header

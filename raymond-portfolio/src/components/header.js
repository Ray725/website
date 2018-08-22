import React, { Component } from 'react'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCode } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgba(0, 0, 0, 0)',
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
          <h2 style={{ margin: 15, color: 'black' }}>
            {siteTitle}
          </h2>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs={0}>
              <LinkButton route="/" buttonText="About" color="default" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs={0}>
              <LinkButton route="projects" buttonText="Projects" color="primary" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs={0}>
              <LinkButton route="contact" buttonText="Contact" color="secondary" variant="outlined"></LinkButton>
            </Grid>
            <Grid item xs={1}>
              <a href="https://github.com/Ray725" target="_blank">
                <FontAwesomeIcon icon={faCode} color="black" size="lg"/>
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  </div>
)

export default Header

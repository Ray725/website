import React from 'react'
import Link from 'gatsby-link'

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
      <h2 style={{ margin: 0 }}>
        {siteTitle}
      </h2>
      <h3>
          Columbia University CS Major
      </h3>
      <Grid container spacing={8}>
        <Grid item xs>
          <LinkButton route="/" buttonText="Home"></LinkButton>
        </Grid>
        <Grid item xs>
          <LinkButton route="projects" buttonText="Projects"></LinkButton>
        </Grid>
        <Grid item xs>
          <LinkButton route="resume" buttonText="Resume"></LinkButton>
        </Grid>
        <Grid item xs>
          <LinkButton route="contact" buttonText="Contact"></LinkButton>
        </Grid>
      </Grid>
    </div>
  </div>
)

export default Header

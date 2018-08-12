import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'
import LinkButton from '../components/LinkButton'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <LinkButton route="/" buttonText="Home"></LinkButton>
    <LinkButton route="projects" buttonText="Projects"></LinkButton>
    <LinkButton route="resume" buttonText="Resume"></LinkButton>
    <LinkButton route="contact" buttonText="Contact"></LinkButton>
  </div>
)

export default IndexPage

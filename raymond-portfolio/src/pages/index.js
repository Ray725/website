import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'
import LinkButton from '../components/LinkButton'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button variant="contained" color="primary"><Link to="/contact/">Contact</Link></Button>
    <LinkButton route="contact" buttonText="Squad"></LinkButton>
    <p><Link to="/resume/">Resume</Link></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

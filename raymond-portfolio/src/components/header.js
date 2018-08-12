import React from 'react'
import Link from 'gatsby-link'

import LinkButton from './LinkButton'

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
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <h3>
          Columbia University CS Major
      </h3>
      <LinkButton route="/" buttonText="Home"></LinkButton>
      <LinkButton route="projects" buttonText="Projects"></LinkButton>
      <LinkButton route="resume" buttonText="Resume"></LinkButton>
      <LinkButton route="contact" buttonText="Contact"></LinkButton>
    </div>
  </div>
)

export default Header

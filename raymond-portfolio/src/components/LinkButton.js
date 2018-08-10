import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'

const LinkButton = (props) => (
  <Button variant="contained">
    <Link to={props.route}>
      {props.buttonText}
    </Link>
  </Button>
)

export default LinkButton

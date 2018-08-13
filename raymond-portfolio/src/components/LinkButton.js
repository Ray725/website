import React from 'react'
import { push } from 'gatsby-link'
import Button from '@material-ui/core/Button'

const LinkButton = (props) => (
  <Button variant={props.variant} color={props.color} onClick={ () => push(props.route) }>
    {props.buttonText}
  </Button>
)

export default LinkButton

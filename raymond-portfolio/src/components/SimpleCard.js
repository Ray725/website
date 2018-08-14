import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Background from './Background';

const styles = {
  card: {
    minWidth: 275,
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
};

function SimpleCard(props) {
  const url = props.url;
  return (
    <div>
      <Card>
        <CardContent>
          <Background />
          <Typography variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography color="textSecondary">
            {props.date}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => window.open(url, "_blank") }>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleCard);
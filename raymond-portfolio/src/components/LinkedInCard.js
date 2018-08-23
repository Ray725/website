import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    marginBottom: 4,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function LinkedInCard(props) {
  const url = props.url;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            LinkedIn
          </Typography>
          <Typography color="textSecondary">
            Updated as of {props.date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => window.open(url, "_blank") }>Click here!</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(LinkedInCard);
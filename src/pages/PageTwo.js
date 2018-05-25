import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="display1">
          Page 2
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to="/page1">
          Back To Page 1
        </Button>
      </CardActions>
    </Card>
  )
};

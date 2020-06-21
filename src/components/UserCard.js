import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {deleteCookie} from "../helper";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const logout = () => {
  deleteCookie('access_token');
  deleteCookie('user_id');
  window.location = '/login';
}


export default function UserCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {data} = props;
  const {data: d} = data;
  const {contact = '', email = '', username = ''} = d || {};
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Hello {username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Your Contact: {contact}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Your Email: {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={logout}>Logout</Button>
      </CardActions>
    </Card>
  );
}

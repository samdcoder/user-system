import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import doLoginAction from "../actions/doLoginAction";
import {Alert} from '@material-ui/lab';
import {setCookie} from "../helper";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sonu-verma">
        Sonu Verma
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(-1);
  // -1 is not tried, 0 is failed, 1 is passed, display error in case of 0
  const onSubmit = (e) => {
    e.preventDefault();
    doLoginAction({userName, password}, onSuccess);
  }
  const onSuccess = (d) => {
    const {data} = d;
    const {status, token_id: access_token, user_id: userId} = data;
    if (!status) {
      setLoginStatus(-0);
    } else {
      setCookie('access_token', access_token);
      setCookie('user_id', userId);
      window.location = `/profile/${userId}`;
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={e => setUserName(e.target.value)}
                autoComplete="uname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                autoFocus
                value={userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            onClick={onSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright/>
        <br/><br/>
        {loginStatus === 0 &&
        <Alert variant="outlined" severity="error">
          Incorrect Login Credentials
        </Alert>}
      </Box>
    </Container>
  );
}
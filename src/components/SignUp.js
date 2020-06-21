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
import doRegisterAction from "../actions/doRegisterAction";
import {Alert, AlertTitle} from '@material-ui/lab';


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


export default function SignUp() {
  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
  const [success, setSuccess] = useState(false);
  
  
  const onSubmit = (e) => {
    e.preventDefault();
    doRegisterAction({userName, password, email, phone}, onSuccess);
  }
  
  const onSuccess = (d) => {
    const {data} = d;
    const {errors, status} = data;
    if (status) {
      setSuccess(true);
      setTimeout(() => {
        window.location = '/login';
      }, 3000)
    }
    const {contactError = '', passwordError = '', emailError = '', usernameError = ''} = errors || {};
    if (contactError.length) {
      setPhoneError(contactError);
    }
    if (emailError.length) {
      setEmailError(emailError);
    }
    if (passwordError.length) {
      setPasswordError(passwordError);
    }
    if (usernameError.length) {
      setUserNameError(usernameError);
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
          Sign up
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
              <div style={{color: 'red'}}>
                {userNameError}
              </div>
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
              <div style={{color: 'red'}}>
                {passwordError}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
              />
              <div style={{color: 'red'}}>
                {emailError}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setPhone(e.target.value)}
                type="number"
                autoComplete="pnumber"
                name="phoneNumber"
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone"
                autoFocus
                value={phone}
              />
              <div style={{color: 'red'}}>
                {phoneError}
              </div>
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
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright/>
        {success && <Alert severity="success">
          <AlertTitle>Registration Successful</AlertTitle>
          You have successfully registered. Redirecting you to the login page.
        </Alert>}
      </Box>
    </Container>
  );
}
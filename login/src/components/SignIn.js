import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root:{
    height:"100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    width:"375px",
    marginLeft:"35%",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'Azure',
    boxShadow: "0 0 20px blue",
    padding: "20px 25px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    height:"100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  li: {
    textDecoration:"none",
  },
}));

const SignIn = () => {
  const [HomeisAuth, HomesetIsAuth] = useState(false);
  const classes = useStyles();

  if(HomeisAuth) {
    return <Redirect to='/Home' />
    }

      const log = (e) => {
        e.preventDefault();
        let request = {
          email: document.getElementById('emaill').value,
          password: document.getElementById('passwordd').value
        }
        axios.post('http://localhost:3000/login' ,request)
        .then(resp => {
          
            if(resp.data.message === "Success"){ 
              HomesetIsAuth(true)
            }
            else{
              alert(resp.data.message);
            }
        })
        .catch(err => {
          console.log(err)
        })
      }


    return (
      <Container component="main" maxWidth="xm">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={(e) => {log(e)} }>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emaill"
              label="Email Address"
              name="email"
            />
            <TextField 
              color = "primaryS"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="passwordd"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link className={classes.li} onClick ={()=>{
                    alert("Password he bhool gae?    LOL ............... Ab Bhool Jao Account");
                } } >
                Forget Password
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.li} to='/SignUp'>
                Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
          </div>
      </Container>
    );
  }
  
  export default SignIn



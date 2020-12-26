import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'Azure',
    boxShadow: "0 0  20px blue",
    padding: "20px 25px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cntr: {
    marginLeft: theme.spacing(3),
  },
  li:{
    textAlign:'center',
  },
  formcontrl:{
    display:"flex",
    marginTop:"5px",
    width:"45%",

  },
}));

  const SignUp = () => {
    
    const classes = useStyles();
    const [category, setCategory] = useState('');
    const handlechange = (event) => {
      setCategory(event.target.value);
    }

   return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
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
              <FormControl className={classes.formcontrl}>
              <InputLabel id="labelcontrol" >Select Category?</InputLabel>
              <Select id="select"
              value = {category}
              onChange= {handlechange} >
              <MenuItem value={1} >Student</MenuItem>
              <MenuItem value={2}>Company</MenuItem>
              <MenuItem value={3}>Admin</MenuItem>
              </Select>
            </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
              <Grid item xs={12} className={classes.li}>
                <Link to = '/SignIn' >
                Have an account?  Sign In
                </Link>
              </Grid>
            </Grid>
        </form>
      </div>
    </Container>
   );
}

export default SignUp
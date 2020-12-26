import { makeStyles } from '@material-ui/core'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assests/image/logo.png'

const useStyles = makeStyles(theme => ({
    menuButton: {
        backgroundColor: "black",
    },
    title: {
            flexGrow: 1,
            paddingLeft : 100,
            textDecoration:"none",
            color:'red',
    },
    avat: {
        border:'2px solid red',
    },
    butt: { 
        paddingRight:"15px",
        textDecoration:"none",
    },
    typo:{
        color:"red",
    },
}));

const NavBar = () =>  {
    const classes = useStyles();
    return (
        <div >
            <AppBar position="static" className= {classes.menuButton}>
                <Toolbar >
                    <Link to='/Home'><Avatar alt="Fogos" src= {logo} className={classes.avat}/> </Link>
                    <Link to='/Home' className={classes.title}>
                    <Typography variant="h6">
                        CAMPUS RECRUITMENT SYSTEM
                    </Typography>
                    </Link>
                    <Link className={classes.butt} to = '/SignIn'>
                    <Typography variant="h6" className={classes.typo}>
                        SIGN IN
                    </Typography></Link>
                    <Link className={classes.butt} to = '/SignUp'>
                    <Typography variant="h6" className={classes.typo}>
                        SIGN UP
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar

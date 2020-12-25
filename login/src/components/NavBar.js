import { makeStyles } from '@material-ui/core'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import logo from '../logo.png'


const useStyles = makeStyles(theme => ({
    menuButton: {
        color: "black",
        backgroundColor: "Azure",
    },
    title: {
            flexGrow: 1,
            paddingLeft : 100,
    },
    avat: {
        color: "black",
        backgroundColor: "blue"
    },
    butt: {
        
        paddingRight:"15px",
        textDecoration:"none",
    }

}));

const NavBar = () =>  {
    const classes = useStyles();
    return (
        <div >
            {console.log("SIGNIN")}
            <AppBar position="static" className= {classes.menuButton}>
                <Toolbar >
                <Avatar alt="Fogos" src= {logo} className={classes.avat}/>
                    <Typography variant="h6" className={classes.title} >
                        RECRUITMENT SYSTEM
                    </Typography>
                    <Link color="inherit" className={classes.butt} to = '/SignIn'>
                    <Typography variant="h6" className={classes.link} >
                        SIGNIN
                    </Typography></Link>
                    <Link color="inherit"className={classes.butt} to = '/SignUp'>
                    <Typography variant="h6" className={classes.link} >
                        SIGNUP
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar

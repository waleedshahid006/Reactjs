import { withStyles } from '@material-ui/core'
import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import logo from '../logo.png'
const styles = theme => ({
    menuButton: {
        color: "black",
        backgroundColor: "red",
    },
    title: {
        flexGrow: 1,
    },
    avat: {
        color: "black",
        backgroundColor: "blue"
    },
    butt: {
        marginLeft: 10,
    }
});

class NavBar extends Component {
    render(){
        const {classes} = this.props;
    return (
        <div className="main">
            <AppBar position="static" className= {classes.menuButton}>
                <Toolbar >
                <Avatar alt="Fogos" src= {logo} className={classes.avat}/>
                    <Typography variant="h6" className={classes.title} >
                        Kiskii Recruitment bhaiii
                    </Typography>
                    <Button color="inherit" className={classes.butt}>Log in</Button>
                    <Button color="inherit"className={classes.butt}>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
    }
}
export default withStyles(styles)(NavBar)

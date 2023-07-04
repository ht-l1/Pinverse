import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { googleLogin, googleLogout } from '@react-oauth/google';


import useStyles from './styles';
import memories from '../../images/star4.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (

    <Router>
        <AppBar className={classes.appBar} position="static" style={{ backgroundColor: 'rgba(204, 85, 119, 0.5)' }}>
            <div classesName={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" style={{ fontWeight: 'bold', fontFamily: 'cursive', color: 'white' }}>Pinverse
            <img className={classes.image} src={memories} alt="icon" height="60" /></Typography>
            </div> 
        
            {/* add a toolbar with logic showing if we have user logged in or not */}
            <Toolbar className={classes.toolbar}>
                {/* below is what we see when we are logged in */}
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                // or else we show the button to log in in a different page
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
            
        </AppBar>
    </Router>
    );
}

export default Navbar;
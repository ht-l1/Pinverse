import React from 'react';
import { Typography } from '@mui/material';

import useStyles from './styles';

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center" >
          &copy; {new Date().getFullYear()} Pinverse. All rights reserved.
        </Typography>
      </footer>

);
};

export default Footer;
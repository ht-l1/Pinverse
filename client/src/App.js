import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@mui/material';
import { AppBar } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
// import memories from './images/memories.png';
import memories from './images/star4.png';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

      return (
        <Container maxWidth="lg">
          {/* <AppBar className={classes.appBar} position="static" color="inherit"> */}
          <AppBar className={classes.appBar} position="static" style={{ backgroundColor: 'rgba(204, 85, 119, 0.5)' }}>
            <Typography className={classes.heading} variant="h2" align="center" style={{ fontWeight: 'bold', fontFamily: 'cursive', color: 'white' }}>Pinverse
            <img className={classes.image} src={memories} alt="icon" height="60" /></Typography>
          </AppBar>

          <Grow in>
            <Container>
              <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>


        {/* adding footer section */}
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Pinverse. All rights reserved.
        </Typography>
      </footer>

        </Container>
      );
    };
    
export default App;
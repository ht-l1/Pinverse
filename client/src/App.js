import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('profile'));

return (
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_API_KEY}`}>
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          {/* try to fix the sign in page not working */}
          {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
          {/* trying below to work */}
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
};

export default App;
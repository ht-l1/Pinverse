import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />

        {/* Switch was replaced by Routes in react-router-dom v6 */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        
        <Footer />
      
      </Container>
    </BrowserRouter>
  );
};
    
export default App;
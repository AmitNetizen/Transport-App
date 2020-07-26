import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../component/Header';
import Footer from '../component/Footer';
import LandingPage from '../pages/landingPage';

function Container() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
}

export default Container;

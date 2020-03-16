import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import NavbarContainer from './shared/NavbarContainer';
import LoginContainer from './users/LoginContainer';
import SignupContainer from './users/SignupContainer';
import PasswordResetContainer from './users/PasswordResetContainer';

const HomeContainer = function HomeContainer() {
  return (
    <div>
      <h1> Home page </h1>
      <p> You can edit this in Router.js.</p>
    </div>
  );
}

const Router = function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavbarContainer />
          <ToastContainer hideProgressBar/>
          <Route path='/' component={HomeContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route path='/password-reset' component={PasswordResetContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;

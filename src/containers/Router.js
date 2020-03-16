import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import NavbarContainer from './shared/NavbarContainer';
// Auth
import LoginContainer from './users/LoginContainer';
import SignupContainer from './users/SignupContainer';
import PasswordResetContainer from './users/PasswordResetContainer';
// Admin
import AdminContainer from './admin/AdminContainer';
import ManageUsersContainer from './admin/ManageUsersContainer';

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
          <Route path='/' exact component={HomeContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route exact path='/admin' component={AdminContainer} />
          <Route path='/password-reset' component={PasswordResetContainer} />
          <Route exact path='/admin/users' component={ManageUsersContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;

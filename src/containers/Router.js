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
import ManageGamesContainer from './games/ManageGamesContainer';
// import ManageShowsContainer from './shows/ManageShowsContainer';
import ManageUsersContainer from './admin/ManageUsersContainer';

const Router = function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavbarContainer />
          <ToastContainer hideProgressBar/>
          <Route path='/' exact component={AdminContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route exact path='/admin' component={AdminContainer} />
          <Route path='/password-reset' component={PasswordResetContainer} />
          <Route exact path='/admin/users' component={ManageUsersContainer} />
          {/*<Route exact path='/admin/shows' component={ManageShowsContainer} />*/}
          <Route exact path='/admin/games' component={ManageGamesContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;

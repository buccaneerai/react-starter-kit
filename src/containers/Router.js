import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import NavbarContainer from './shared/NavbarContainer';
// Auth
import LoginContainer from './users/LoginContainer';
import SignupContainer from './users/SignupContainer';
import PasswordResetContainer from './users/PasswordResetContainer';
// Games
import EditGameContainer from './games/EditGameContainer';
import ManageGamesContainer from './games/ManageGamesContainer';
import NewGameContainer from './games/NewGameContainer';
// Shows
// import EditShowContainer from './games/EditShowContainer';
import ManageShowsContainer from './shows/ManageShowsContainer';
// import NewShowContainer from './games/NewShowContainer';
// Admin
import AdminContainer from './admin/AdminContainer';
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
          <Route exact path='/users' component={ManageUsersContainer} />
          <Route exact path='/shows' component={ManageShowsContainer} />
          <Route exact path='/games' component={ManageGamesContainer} />
          <Route exact path='/games/create' component={NewGameContainer} />
          <Route exact path='/games/:gameId/edit' component={EditGameContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;

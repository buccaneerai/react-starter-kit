import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import NavbarContainer from '../containers/shared/NavbarContainer';

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
          <ToastContainer hideProgressBar/>
          <Route path='/' component={HomeContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;

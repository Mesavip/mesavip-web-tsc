import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './components/Routes/PrivateRoute';
// import PublicRoute from './components/Routes/PublicRoute';

import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile';
// import Restaurant from './pages/Restaurant';
// import Reservations from './pages/Reservations';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact  component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Restaurant } from './pages/Restaurant';
import { Reservations } from './pages/Reservations';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute restricted path="/signin" component={SignIn} />
        <PublicRoute restricted path="/signup" component={SignUp} />
        <PublicRoute path="/restaurants/:id" component={Restaurant} />
        <PrivateRoute path="/reservations" component={Reservations} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

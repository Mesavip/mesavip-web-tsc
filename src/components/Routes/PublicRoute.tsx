import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

export default function PrivateRoute({
  component: Component,
  restricted,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

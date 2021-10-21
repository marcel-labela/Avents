import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import { useIdentityContext } from 'react-netlify-identity-widget';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, location, ...rest }) => {
  const { isConfirmedUser, isLoggedIn } = useIdentityContext();

  if (!isConfirmedUser) return <p>User is not confirmed, confirm your invite mail.</p>;

  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Redirect noThrow to={'/login'} />
  );
};

type PrivateRouteProps = RouteComponentProps & {
  component: React.ElementType;
};

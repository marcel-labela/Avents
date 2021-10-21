import * as React from 'react';
import { Router, useLocation } from '@reach/router';

import { Template } from 'common/layout';
import { PrivateRoute } from 'common/general';
import { AccountPage as Account } from 'modules/accountPage';

const AccountPage = () => {
  const location = useLocation();

  return (
    <Template>
      <Router
        key={location.pathname}
        location={location}
        basepath="/"
      >
        <PrivateRoute path="/account" component={Account} />
      </Router>
    </Template>
  );
};

export default AccountPage;

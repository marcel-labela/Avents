import React from 'react';
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS

import { Template } from 'common/layout';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const identity = useIdentityContext();
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || 'NoName';

  const isLoggedIn = identity && identity.isLoggedIn;
  return (
    <>
      <Template>
        <h2>Dit is een template</h2>
        {isLoggedIn && (
          <a href="/account">Account page</a>
        )}
        <h3 onClick={() => setOpenModal(true)}>open login modal</h3>
      </Template>
      <IdentityModal showDialog={openModal} onCloseDialog={() => setOpenModal(false)} />
    </>
  ); };

export default Home;

import React from 'react';
import  { useIdentityContext } from 'react-netlify-identity-widget';

export const AccountPage = () => {
  const { user } = useIdentityContext();

  return (
    <>
      <p>Dit is de accountpage</p>
      <p>{user}</p>
    </>
  );
};

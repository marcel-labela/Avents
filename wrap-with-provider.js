// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

export const wrapRootElement = ({ element }) => (
  <IdentityContextProvider url="https://tender-blackwell-354266.netlify.app/.netlify/identity">
    {element}
  </IdentityContextProvider>
);

export default wrapRootElement;

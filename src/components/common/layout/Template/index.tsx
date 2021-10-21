import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';

import { Container } from './styled';

export const Template: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  );
};

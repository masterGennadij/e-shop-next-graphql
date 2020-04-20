import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Meta from './Meta';

const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightGrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
  background: #fff;
  color: ${props => props.theme.black};
`;

const Main = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.lightGrey};
`;

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/radnikanext-medium-webfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
  html {
    box-sizing: border-box;
    font-size: 10px;    
  }
  *,*:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family:'radnika_next';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyles />
        <Meta />
        <Header />
        <Main>{props.children}</Main>
      </StyledPage>
    </ThemeProvider>
  );
};
export default Page;

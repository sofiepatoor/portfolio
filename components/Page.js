import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Container from './styles/Container';

const GlobalStyles = createGlobalStyle`
  html {
    --accent: #c084fc;
    --black: #18181b;
    --defaultTextColor: #ffffff;
    --maxWidth: 1000px;
    --sansSerifDefaultFonts: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--sansSerifDefaultFonts);
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    width: 100%;
    min-height: 100vh;
    background-color: var(--black);
    color: var(--defaultTextColor);
  }

  a {
    text-decoration: underline;
    color: var(--defaultTextColor);

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  button {
    font-family: var(--sansSerifDefaultFonts);
  }

  ::selection {
    background-color: var(--accent);
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Container>
        {children}
      </Container>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
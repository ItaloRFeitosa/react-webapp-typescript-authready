import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

interface GlobalProps {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  @import url('https://fonts.googleapis.com/css?family=Roboto:200,400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font: 400 14px 'Roboto', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
  }

`;

export default GlobalStyle;

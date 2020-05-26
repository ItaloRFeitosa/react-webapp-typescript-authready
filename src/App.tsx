import React from 'react';

import Routes from './routes';

import GlobalStyles from './styles/global';

import {ThemeProvider} from 'styled-components';

import {light, dark} from './styles/theme';

const App: React.FC = () => (
    <ThemeProvider theme={light}>
      <Routes/>
      <GlobalStyles/>
    </ThemeProvider>
  )

export default App;

import React from 'react';

import Routes from './routes';

import GlobalStyles from './styles/global';

import {ThemeProvider} from 'styled-components';

import {light, dark} from './styles/theme';

import {AuthProvider} from './contexts/AuthContext';

const App: React.FC = () => (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <GlobalStyles/>
    </ThemeProvider>
  )

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import './styles/font.css';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('light', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
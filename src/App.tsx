import React from 'react';
import theme from '@styles/theme';
import MainRouters from './routers/MainRouters';
import { ThemeProvider } from 'styled-components/native';

const App: React.FC = () => {
  return (
    // <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <MainRouters />
    </ThemeProvider>
    // </ReduxProvider>
  );
};

export default App;

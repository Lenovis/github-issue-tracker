/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';
import Navigator from './routes/Navigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;

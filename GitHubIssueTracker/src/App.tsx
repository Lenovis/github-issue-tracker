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
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { ThemeProvider } from 'styled-components';
import { theme as importedTheme } from './assets/theme';
import Navigator from './routes/Navigator';

const App = () => {
  return (
    <ThemeProvider theme={importedTheme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={importedTheme.colors.backgroundColor}
        />
        <Navigator />
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

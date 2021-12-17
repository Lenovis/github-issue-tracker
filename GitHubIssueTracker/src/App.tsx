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
import styled from 'styled-components';
import { theme } from './assets/theme';
import Navigator from './routes/Navigator';
import { Provider } from 'react-redux';
import { configStore } from './state/store';

const { store } = configStore();
const App = () => {
  return (
    <Provider store={store}>
      {/* TODO: think of way to use themeProvider and be able to use in it in tests */}
      {/* <ThemeProvider theme={importedTheme}> */}
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.backgroundColor}
        />
        <Navigator />
      </Container>
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default App;

const Container = styled(SafeAreaView)`
  background-color: ${theme.colors.backgroundColor};
  flex: 1;
`;

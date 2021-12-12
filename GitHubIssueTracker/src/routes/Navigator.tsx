import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../containers/HomeScreen';
import { RouteNames } from './RouteNames';
import IssueScreen from '../containers/IssueScreen';
import { navigationBarTheme } from '../assets/theme';

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={RouteNames.HomeScreen}
          component={Home.IssueOwnerView}
          options={navigationBarTheme}
        />
        <Screen
          name={RouteNames.RepoScreen}
          component={Home.IssueRepoView}
          options={navigationBarTheme}
        />
        <Screen
          name={RouteNames.IssueScreen}
          component={IssueScreen.IssueView}
          options={navigationBarTheme}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

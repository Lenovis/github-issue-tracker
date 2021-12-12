import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../containers/HomeScreen';
import { RouteNames } from './RouteNames';
import IssueScreen from '../containers/IssueScreen';

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={RouteNames.HomeScreen} component={Home.IssueOwnerView} />
        <Screen name={RouteNames.RepoScreen} component={Home.IssueRepoView} />
        <Screen
          name={RouteNames.IssueScreen}
          component={IssueScreen.IssueView}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

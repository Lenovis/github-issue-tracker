import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../containers/HomeScreen';
import { RouteNames } from './RouteNames';

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={RouteNames.Home} component={Home.IssueOwnerView} />
        <Screen name={RouteNames.Repo} component={Home.IssueRepoView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/pageOne';
import AddReceipt from '../screens/pageTwo';

const RootStack = createStackNavigator(
  {
    Home: Home,
    AddReceipt: AddReceipt
  },
  {
    initialRouteName: "Home"
  }
);

export const AppContainer = createAppContainer(RootStack);

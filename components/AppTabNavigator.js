import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AppShare from '../Screens/AppShareScreen';
import {AppStackNavigator} from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
  AppReview:{
    screen: AppStackNavigator,
    navigationOptions:{
      tabBarLabel:"App review"
    }
  },
  AppShare:{
    screen: AppShare,
    navigationOptions:{
      tabBarLabel:"App share"
    }
  },
})
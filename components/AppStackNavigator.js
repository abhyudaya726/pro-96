import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import AppReviewScreen from '../Screens/AppReviewScreen';
import AppDetailScreen from '../Screens/AppDetailScreen';

export const AppStackNavigator = createStackNavigator({
  AppReview:{
    screen: AppReviewScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  AppDetail:{
    screen: AppDetailScreen,
    navigationOptions:{
      headerShown:false
    }
  }
},
  {
    initialRouteName:'AppReview'
  }
);
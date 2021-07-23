import React,{Component} from 'react';
import {View} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import {AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import LoginScreen from './Screens/LoginScreen';

export default class App extends Component{
  
  render(){
    return(
      <AppContainer />
    )
  }
}

const SwitchContainer = createSwitchNavigator({
  LoginScreen:{
    screen: LoginScreen
  },
  Drawer:{
    screen: AppDrawerNavigator
  },
  AppTab:{
    screen: AppTabNavigator
  }
});

const AppContainer = createAppContainer(SwitchContainer);
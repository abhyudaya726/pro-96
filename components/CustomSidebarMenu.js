import React,{Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import {Avatar} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config';

export default class CustomSidebarMenu extends Component{

  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser.email,
      image:null
    }
  }

  render(){
    return(
      <View tyle={{flex:1}}>

        <View style={{flex:0.5,borderColor:'red',borderWidth:2,alignItems:'center',backgroundColor:'orange'}}>
          <Text style = {{fontWeight:'100',fontSize:20,color:'white',}}> {this.state.userId}</Text>

        </View>

        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity tyle={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('LoginScreen')
              firebase.auth().signOut()
          }}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 12,
    fontWeight:'bold'
  }
})
import React,{Component} from 'react';
import {Text,View,KeyboardAvoidingView,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import firebase from 'firebase';

import MyHeader from '../components/MyHeader';
import db from '../config';

export default class AppShare extends React.Component{

  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser.email,
      appName:'',
      appDescription:'',
      appLink:''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  addApp = async (appName,appDescription,appLink)=>{
    var userId = this.state.userId;
    var appId = this.createUniqueId();
    db.collection("all_apps").add({
      "user_id":userId,
      "app_name":appName,
      "app_description":appDescription,
      "app_link":appLink,
      "app_id":appId,
    })
  }

  render(){
    return(
      <View>
        <MyHeader title="App Share" navigation={this.props.navigation} />
        <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter app name"}
                onChangeText={(text)=>{
                    this.setState({
                        appName:text
                    })
                }}
                value={this.state.appName}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter app download link"}
                onChangeText={(text)=>{
                    this.setState({
                        appLink:text
                    })
                }}
                value={this.state.appLink}
              />
              <TextInput
                style ={[styles.formTextInput,{height:100}]}
                multiline
                numberOfLines ={3}
                placeholder={"what is the work of the app/what problems does the app solve"}
                onChangeText ={(text)=>{
                    this.setState({
                        appDescription:text
                    })
                }}
                value ={this.state.appDescription}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addApp(this.state.appName,this.state.appDescription,this.state.appLink)}}>
                <Text>Share</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)

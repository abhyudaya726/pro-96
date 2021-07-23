import React,{Component} from 'react';
import {Text,View,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';

import MyHeader from '../components/MyHeader';
import db from '../config';

export default class AppReview extends Component{

  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser,
      publishedAppList:[]
    }
    this.publishedRef=null;
  }

  getPublishedAppList =()=>{
    this.requestRef = db.collection("all_apps")
    .onSnapshot((snapshot)=>{
      var publishedAppList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        publishedAppList:publishedAppList
      });
    })
  }

  componentDidMount(){
    this.getPublishedAppList();
  }

  componentWillUnmount(){
    this.publishedRef
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.app_name}
        subtitle={item.app_description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate("AppDetail",{"details": item})
              }}>
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="App Review" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.publishedAppList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Published Apps</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.publishedAppList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
});
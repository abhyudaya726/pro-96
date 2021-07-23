import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  userSignUp = async (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection('users').add({
          'email-id': this.state.email,
          password: this.state.password,
        });
        console.log('Signed up');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return console.log(errorMessage);
      });
  };

  userLogIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('AppShare');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return console.log(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.25 }}>
          <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 15 }}>
            App Share
          </Text>
          <Image
            source={require("../assets/logo.png")}
            style={{width:200, height: 200,marginLeft:75}}/>
        </View>
        <View style={{marginTop:60}}>
          <TextInput
            style={styles.inputBox}
            placeholder="E-Mail Address"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
            value={this.state.email}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            value={this.state.password}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.userSignUp(this.state.email, this.state.password)
            }>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.userLogIn(this.state.email, this.state.password)
            }>
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fc0b8',
  },
  inputBox: {
    width: '90%',
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  button: {
    width: '80%',
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#ffff',
    shadowColor: '#000',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

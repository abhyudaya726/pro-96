import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';

import MyHeader from '../components/MyHeader';
import db from '../config';

export default class AppDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      userName: '',
      publisherId: this.props.navigation.getParam('details')['user_id'],
      appId: this.props.navigation.getParam('details')['request_id'],
      appName: this.props.navigation.getParam('details')['app_name'],
      appLink: this.props.navigation.getParam('details')['app_link'],
      app_description: this.props.navigation.getParam('details')[
        'app_description'
      ],
      publisherName: '',
      publisherContact: '',
      publisherAddress: '',
      publisherRequestDocId: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1 }}>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#696969"
                onPress={() => this.props.navigation.goBack()}
              />
            }
            centerComponent={{
              text: 'App Details',
              style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#eaf8fe"
          />
        </View>
        <View style={{ flex: 0.3 }}>
          <Card title={'App Details'} titleStyle={{ fontSize: 20 }}>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Name : {this.state.appName}
              </Text>
            </Card>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Description : {this.state.app_description}
              </Text>
            </Card>
            <Card>
              <Text style={{ fontWeight: 'bold' }}>
                Link : {this.state.appLink}
              </Text>
            </Card>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

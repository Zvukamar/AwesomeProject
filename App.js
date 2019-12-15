import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

class App extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // auto sms catch
      if (user) {
        // continue code here
      }
    });
    firebase.auth().signInWithPhoneNumber('+972544587647') // phone number format +972-5x-xxx-xx-xx
      .then((confirmResult) => {
        // confirmResult.confirm(verificationCode)
      })
      .catch(error => {
        // catch some error here
      });
  }

  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
};

export default App;

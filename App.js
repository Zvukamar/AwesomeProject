import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'react-native-firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // auto sms catch
      if (user) {
        // continue code here
      }
    });
  }

  sendSMS = () => {
    console.log(this.state.number);
    firebase.auth().signInWithPhoneNumber(`+${this.state.number}`) // phone number format +972-5x-xxx-xx-xx
      .then((confirmResult) => {
        // confirmResult.confirm(verificationCode)
      })
      .catch(error => {
        // catch some error here
      });
  }

  setNumber = (number) => {
    this.setState({ number })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Number Here: with(972)</Text>
        <TextInput keyboardType='number-pad' style={{ width: 200, borderWidth: 1 }} onChangeText={this.setNumber} />
        <Button title='Press' onPress={this.sendSMS} />
      </View>
    );
  }
};

export default App;

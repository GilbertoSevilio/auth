import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTxHjggqGOvMA0zdVD2JC8PzHU4QH4rNw',
      authDomain: 'auth-61d34.firebaseapp.com',
      databaseURL: 'https://auth-61d34.firebaseio.com',
      projectId: 'auth-61d34',
      storageBucket: 'auth-61d34.appspot.com',
      messagingSenderId: '551382202007'
    });
  }

render() {
  return (
    <View>
    <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
}

}

export default App;

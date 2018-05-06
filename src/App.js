import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTxHjggqGOvMA0zdVD2JC8PzHU4QH4rNw',
      authDomain: 'auth-61d34.firebaseapp.com',
      databaseURL: 'https://auth-61d34.firebaseio.com',
      projectId: 'auth-61d34',
      storageBucket: 'auth-61d34.appspot.com',
      messagingSenderId: '551382202007'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return <Button>Log Out</Button>;
    case false:
      return <LoginForm />;

    default:
      return <Spinner size="large" />;
  }
}


render() {
  return (
    <View>
    <Header headerText="Authentication" />
      {this.renderContent()}
    </View>
  );
}

}

export default App;

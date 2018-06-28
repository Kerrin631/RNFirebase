import React, { Component } from 'react';
import {
  Alert, Button, TextInput, View, StyleSheet, Text
} from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  
  componentWillMount() {
    firebase.initializeApp({
    //   apiKey: "KEY_STRING",
    // authDomain: "PROJECT_DOMAIN",
    // databaseURL: "PROJECT_URL",
    // projectId: "PROJECT_ID",
    // storageBucket: "PROJECT_BUCKET",
    // messagingSenderId: "PROJECT_SENDER_ID"
    })
  }
  
  
  render() {
    return (
        <LoginForm />
    );
  }
}



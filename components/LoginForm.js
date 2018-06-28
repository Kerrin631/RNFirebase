import React, { Component } from 'react';
import {
  Alert, Button, TextInput, View, StyleSheet, Text
} from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', message: '', error: ''}
  
  
  onLogin() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => this.setState({ message: user + 'logged in', error: ''}))
      .catch(() => this.setState({ error: 'unable to log in', message: ''}))
  }
  
  onRegister() {
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => this.setState({ message: user + 'registered', error: ''}))
      .catch(() => this.setState({ error: 'unable to register', message: ''}))
  }
  
  
  render() {
    return (
    <View style={styles.container}>
      <TextInput
        value={this.state.email}
        onChangeText={(email) => this.setState({ email })}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.input}
        onPress={this.onLogin.bind(this)}
      />
      
      <Button
        title={'Register'}
        style={styles.input}
        onPress={this.onRegister.bind(this)}
      />
      
      <Text>
      {this.state.message}
      {this.state.error}
      </Text>
      
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default LoginForm;
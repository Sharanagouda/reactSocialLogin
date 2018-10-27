import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screens/Home'
import SocialLogin from './src/screens/SocialLogin';
import Social from './src/screens/Social';
import Main from './src/Main';

export default class App extends Component {
  render() {
    return (
         <Main/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

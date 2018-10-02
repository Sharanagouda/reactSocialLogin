import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screens/Home'
import SocialLogin from './src/screens/SocialLogin';
import Social from './src/screens/Social';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <SocialLogin/> */}
        <Social/> 
      </View>
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

import React, {Component} from 'react';
import { StyleSheet,StatusBar, View } from 'react-native';
import Routes from './config/Routes';

export default class Main extends Component {

  
  render() {
    return (
        <View style={styles.appContainer}>
        <StatusBar
          backgroundColor="#152fff"
          barStyle="dark-content"
        />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
});

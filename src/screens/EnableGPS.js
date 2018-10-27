import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'


export default class EnableGPS extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>sdih</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});

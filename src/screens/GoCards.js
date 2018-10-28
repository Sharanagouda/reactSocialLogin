import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class GoCards extends Component {

  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:18}}>Go cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      name : '',
      pic : ''
    }
  }
 openGoogleSignIn(){
    Actions.googinPage();

  }
  openSocialLogin(){
    Actions.facebookpage();
  }
  openBarCodeScannerPage(){
    Actions.barcodeScanner();
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.openSocialLogin}>
      <Text>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openGoogleSignIn}>
      <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openBarCodeScannerPage}>
      <Text>BarCode Scanner</Text>
      </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#330033',
    marginBottom: 5,
  },
});

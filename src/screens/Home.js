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
  openGoFuelCardDetails(){
    Actions.goFuelCardDetails();

  }
  openLoyaltyCardDetails(){
    Actions.loyaltyCardDetails();

  }
  openEnableGps(){
    Actions.enableGps();

  }
  openCustomAlert(){
    Actions.customAlert();

  }
  opengoCards(){
    Actions.goCards();

  }
  openloyaltyCards(){
    Actions.loyaltyCards();

  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.openSocialLogin}>
      <Text style={{fontSize:18}}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openGoogleSignIn}>
      <Text style={{fontSize:18}}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openCustomAlert}>
      <Text style={{fontSize:18}}>Custom Alert</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openGoFuelCardDetails}>
      <Text style={{fontSize:18}}>Go Fuel card detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openLoyaltyCardDetails}>
      <Text style={{fontSize:18}}>loyalty Card Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openEnableGps}>
      <Text style={{fontSize:18}}>Go fuel card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.opengoCards}>
      <Text style={{fontSize:18}}>Go card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openloyaltyCards}>
      <Text style={{fontSize:18}}>loyalty card</Text>
      </TouchableOpacity>
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

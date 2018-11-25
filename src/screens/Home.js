import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native';
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
  openListGridScreen(){
    Actions.listGridView();
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={this.openListGridScreen}>
            <Text style={styles.textStyle}>List Grid View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openSocialLogin}>
            <Text style={styles.textStyle}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openGoogleSignIn}>
            <Text style={styles.textStyle}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openCustomAlert}>
            <Text style={styles.textStyle}>Custom Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openGoFuelCardDetails}>
            <Text style={styles.textStyle}>Go Fuel card detail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openLoyaltyCardDetails}>
            <Text style={styles.textStyle}>loyalty Card Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openEnableGps}>
            <Text style={styles.textStyle}>Go fuel card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.opengoCards}>
            <Text style={styles.textStyle}>Go card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openloyaltyCards}>
            <Text style={styles.textStyle}>loyalty card</Text>
            </TouchableOpacity>
          </ScrollView>
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
  textStyle:{
    fontSize:22,
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

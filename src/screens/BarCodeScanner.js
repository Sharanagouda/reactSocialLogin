import React, {Component} from 'react';
import {Vibration,Dimensions,Linking, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class BarCodeScanner extends Component {

  constructor() {
    super();
    this.state = {
      name : '',
      pic : ''
    }
  }


  render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                  Barcode Scanner
              </Text>
            
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
    camera: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },  
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent',
    },  
});
  
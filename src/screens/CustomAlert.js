import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux'
import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity, Alert } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
export default class CustomAlert extends Component {

  constructor(props) {
    super(props);
 
    this.state = { 
        Alert_Visibility: false ,
       
          data: [
              {
                  label: 'Duch (DU)',
                  value: "Duch",
              },
              {
                  label: 'English (EN)',
                  value: "English",
              },
              {
                label: 'French (FR)',
                value: "French",
            },
            {
              label: 'German (GE)',
              value: "German",
            },
            {
              label: 'Italiyan (IT)',
              value: "Italiyan",
          },
              
          ],
          selectedValue:"English",
    };
  }
   // update state
   onPress = data =>{ this.setState({
      data :data
    });

    }

  Ok_Custom_Alert(visible) {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[1].label;
    this.setState({
      Alert_Visibility: visible,
      selectedValue:selectedButton
    });
    
  }

  Cancel_Custom_Alert(visible) {

    this.setState({
      Alert_Visibility: visible,
      selectedValue:this.state.data[1].value
    });
   
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.valueText}>
                    Value = {this.state.selectedValue}
                </Text>
                
       
         <Modal
          visible={this.state.Alert_Visibility}
          transparent={true}
          animationType="fade"
          onRequestClose={ () => { this.Cancel_Custom_Alert(!this.state.Alert_Visibility)} } >
              <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                  <View style={styles.Alert_Main_View}>
                  <Text style={styles.Alert_Message}> Permissions </Text>
                  <View style={{marginRight:80}}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.onPress}  />
                  </View>
                   <View style={{flexDirection: 'row', height: '20%'}}>
                          <TouchableOpacity 
                              onPress={() => { this.Cancel_Custom_Alert(!this.state.Alert_Visibility)} } 
                              activeOpacity={0.7}>
                              <Text style={styles.CancelTextStyle}> CANCEL </Text>
                          </TouchableOpacity>
                        <TouchableOpacity
                        // onPress={this.onPressUpdateLanguage(!this.state.Alert_Visibility)}
                             onPress={() => { this.Ok_Custom_Alert(!this.state.Alert_Visibility)} }  
                              activeOpacity={0.7}  >
                              <Text style={styles.OkTextStyle}> OK </Text>
                          </TouchableOpacity>
                        </View>
                  
                  </View>
   
              </View>
   
   
          </Modal>
   
          <Button onPress={() => { this.Ok_Custom_Alert(true) }} title="Custom Alert Dialog" />
           
   
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: (Platform.OS == 'ios') ? 20 : 0
  },
  Alert_Main_View:{
    backgroundColor : "#FFF", 
    height: 300 ,
    width: '60%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:5,
   
  },
  Alert_Message:{
      fontSize: 22, 
      color: "#000",
      padding: 10,
    },
    CancelTextStyle:{
      color:'#000',
      fontSize: 14,
      marginTop:30,
      marginLeft:100
  },
  OkTextStyle:{
    color:'#000',
    fontSize: 14,
    marginTop:30,
    marginLeft:20
}
});

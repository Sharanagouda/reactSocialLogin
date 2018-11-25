import React, {Component} from 'react';
import {StyleSheet,  View, TextInput, TouchableOpacity, Alert, Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class SwitchImageScreen extends Component {

    constructor(){
 
        super();
     
        this.state={
     
          TextInput_Data : '',
          imageURL : 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
     
        }
      }

      checkSwitch=(param)=>{
 
        switch(param) {
     
          case '1':
            this.ONE();
            break;
          
          case '2':
            this.TWO();
            break;
     
          case '3':
            this.THREE();
            break;
     
          case '4':
            this.FOUR();
            break;
     
          default:
            Alert.alert("NUMBER NOT FOUND");
        
          }
        }    
        ONE=()=>{
 
            Alert.alert("ONE");
            this.setState({
 
                imageURL : 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'
           
              })
         
          }
         
          TWO=()=>{
         
            Alert.alert("TWO");
            this.setState({
 
                imageURL : 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'
           
              })
         
          }
         
          THREE=()=>{
         
            Alert.alert("THREE");
            this.setState({
 
                imageURL : 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'
           
              })
         
          }
         
          FOUR=()=>{
         
            Alert.alert("FOUR");
         
          }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.checkSwitch("1")}>
          <Image source={{ uri: this.state.imageURL }} style={{width:100,height:100}} value="one"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.checkSwitch("2")}>
           <Image source={{ uri: "https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg" }} style={{width:100,height:100}} value="two"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.checkSwitch("3")}>
           <Image source={{ uri: "https://reactnativecode.com/wp-content/uploads/2017/09/iOS_Switch_3.png" }} style={{width:100,height:100}} value="three"/>
      </TouchableOpacity>
                 <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ TextInput_Data: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          keyboardType = {"numeric"}
        />
 
        <TouchableOpacity onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)} activeOpacity={0.6} style={styles.button} >
 
          <Text style={styles.TextStyle}> GET RESULT </Text>
 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#0FF',
  },
});

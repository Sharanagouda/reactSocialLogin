import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,Button,Dimensions,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LandingScreen extends Component {

  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.LandingScreenTopView}>
      <View style={{borderColor:'#FFF',borderWidth:3,width:256,height:156,borderRadius:10}}>
       <Image source={require('./../assets/atm2.jpg')} style={{width:250,height:150,borderRadius:10}}/>
      </View>
       
      </View>
      <View style={styles.LandingScreenBottomView}>
       <View  style={{alignSelf:'center'}}>
         <Text>skdjfhkasdjfkadssk</Text>
         <Text>skdjfhkasdjfkadssk</Text>
         <Text>skdjfhkasdk</Text>
       </View>
       
      </View>
      <View style={{width:Dimensions.get('window').width,backgroundColor:'#FFF',}}>
           
           <Button title="Add Card" onPress={()=>{}}></Button>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LandingScreenTopView:{
    flex:1,
    backgroundColor:'rgb(71, 71, 71)',
    justifyContent:'center',
    alignItems:'center'
  },
  LandingScreenBottomView:{
    flex:1.2,
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center',
  }
});

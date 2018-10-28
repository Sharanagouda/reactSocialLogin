import React, {Component} from 'react';
import {Image, StyleSheet,Switch, Text,SectionList, View,TouchableOpacity,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Carousel from 'react-native-snap-carousel';

export default class LoyaltyCardDetails extends Component {

  constructor() {
    super();
    this.state={
      
        switch1Value: false,
      data:[
        {
          title:"CARD DETAILS", 
          data:[
            {key:1, name:'1244 4856 8784 9898'},
            {key:1, name:'Exp: 08/23'},
          ]
        },
        {
          title:"BAR CODE", 
          data:[
            {key:1, name:'barcode'},
           
          ]
        },
       
      ]
    }
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
    console.log('Switch 1 is: ' + value)
 }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:2}}>
        <Image source={require('../assets/atm2.jpg')} style={{width:Dimensions.get('window').width-20, height:180,marginTop:10,borderRadius:26,marginLeft:10}}/>
          </View>
            <View style={[styles.container]}>
              <SectionList
                sections={this.state.data}
                renderSectionHeader={({section}) => {
                    return(
                      <View style={styles.titleContainer}>
                      <Text style={styles.title}>
                        {section.title}
                      </Text>
                    </View>
                    )
                  
                }}
                renderItem={({item}) => {
                  if(item.name=="barcode"){
                  return (
                    <View style={[styles.settingListContainer,{justifyContent:"center",alignItems:"center"}]}>
                      <Image source={require('../assets/barcode1.jpg')} style={{width:250,height:80}}  ></Image>
                    </View>
                
                    )}
                    else if(item.name!="barcode"){
                      return (
                        <View style={styles.settingListContainer}>
                        <View style={styles.settingTitleView}>
                            <Text style={styles.item} >{item.name}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={styles.rightIconView}>
                            <Image source={require('../assets/Arrow.png')} style={styles.settingIcons}  ></Image>
                            </View>
                        </TouchableOpacity>
                       </View>
                    
                        )
                    }
                }}/>
              </View>
              <View style={{ backgroundColor:"#efefef",borderWidth:1,borderColor:'#efefef',height:5}}>
              </View>
              <View style={{flex:.6,justifyContent:'center',alignItems:'center',backgroundColor:"#FFF"}}>
              <TouchableOpacity onPress={()=>{alert('Are you sure you want to delete a card')}}>
                  <View style={{justifyContent:"center", width:Dimensions.get('window').width-40, height:40}}>
                  <Text style={{fontSize:20, color:'#e84156', textAlign:'center'}}>Delete Card</Text>
                </View>
                </TouchableOpacity>
              </View>
              
        </View>
    );
  }
}

const styles = StyleSheet.create({

  titleContainer:{
    backgroundColor:"#efefef",
    padding:10
  },
  title:{
    fontSize:10,
    color:"#000"
  },
  container: {
    flex:2.9,backgroundColor:'#FFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  settingListContainer:{
    flex:1,
    flexDirection: 'row',
    backgroundColor:"#FFF",
    borderBottomColor:'red',
    borderBottomWidth:3,
    paddingHorizontal:8,
    paddingVertical: 15,
    justifyContent:"center",
    marginBottom:-8
 },
 settingTitleView:{
   flex:8,
   justifyContent:'center',
   textAlign:'center',
 },
 leftIconView:{
   flex:1,
   justifyContent:'flex-start',
   alignItems:'center',
   paddingTop:5,
   paddingBottom:5
 },
 rightIconView:{
   justifyContent:"center",
   alignItems:"center"
 },
 settingIcons:{
   height:20,
   width:20
 },
 
});

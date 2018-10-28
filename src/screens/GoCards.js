import React, {Component} from 'react';
import {Image, StyleSheet, Dimensions, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Carousel from 'react-native-snap-carousel';

export default class GoCards extends Component {

  constructor() {
    super();
    this.state = {
        entries:[
                {key:1, card:require('./../assets/atm1.jpg')},
                {key:1, card:require('./../assets/atm2.jpg')},
                {key:1, card:require('./../assets/atm3.jpg')},
                {key:1, card:require('./../assets/atm1.jpg')},
                {key:1, card:require('./../assets/atm2.jpg')},

                
            ]
    }
  }

  _renderItem ({item, index}) {
    return (
        <View style={[styles.slide,{marginTop:25}]}>
            <Image style={{width:Dimensions.get('window').width-20,height:200}} source={item.card}/>
        </View>
    );
}
  render() {
    return (
        <Carousel layout={'tinder'} 
        delay={2000}
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get('window').width-40}
        itemWidth={Dimensions.get('window').width-80}
        
      />
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

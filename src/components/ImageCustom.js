import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList,Animated,ActivityIndicator, StyleSheet, Platform} from 'react-native';

const ANIMATION_DURATION = 250;
const ROW_HEIGHT = 150;
export default class ImageCustom extends Component {

    constructor(){
 
        super();
     
        this.state={
     
          TextInput_Data : '',
          imageURL : 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
        };
        this._animated = new Animated.Value(0);
      }

      componentDidMount() {
        Animated.timing(this._animated, {
          toValue: 1,
          duration: ANIMATION_DURATION,
        }).start();
      }

     
       
  render() {

    const rowStyles = [
        styles.row,
        {
          height: this._animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, ROW_HEIGHT],
            extrapolate: 'clamp',
          }),
        },
        { opacity: this._animated },
        {
          transform: [
            { scale: this._animated },
            {
              rotate: this._animated.interpolate({
                inputRange: [0, 1],
                outputRange: ['35deg', '0deg'],
                extrapolate: 'clamp',
              })
            }
          ],
        },
      ];
  
    return (
        <View style = { styles.imageHolder }>
            <Animated.View style={rowStyles}>
                <Image source = {{ uri: this.props.imageURI }} style = { styles.image }/>
                <View style = { styles.textViewHolder }>
                    <Text numberOfLines = { 1 } style = { styles.textOnImage }>
                        { this.props.name }
                    </Text>
                </View>
            </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
   
    imageHolder:
    {
      margin: 5,
      height: 160,
      flex: 1,
      position: 'relative',
     
    },
   
    image:
    {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
    },
    textViewHolder:
  {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: 'center'
  },
 
  textOnImage:
  {
    color: 'white'
  },
 
});

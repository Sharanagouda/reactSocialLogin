import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, StyleSheet, Platform} from 'react-native';
import ImageComponent from "./../components/ImageCustom"
export default class ListGridViewScreen extends Component {

    constructor(){
        super();
        this.state = {
             imagesData: null,
              loading: true,
               gridView: true,
                btnText: 'Show List'
             }
      }

     
   componentDidMount(){

        fetch('https://gamersite123.000webhostapp.com/forest_images_php_file.php')
        .then((response) => response.json())
        .then((responseJson) =>
        {
        this.setState({ imagesData: responseJson, loading: false });
        })
        .catch((error) =>
        {
        console.error(error);
        });
   }

   changeView = () =>{

        this.setState({ gridView: !this.state.gridView }, () =>
        {
            if(this.state.gridView)
            {
            this.setState({ btnText: 'Show List' });
            }
            else
            {
            this.setState({ btnText: 'Show Grid' }); 
            }
        });
   }

  render() {
    return (
      <View style={styles.container}>
      
      {
        (this.state.loading)
        ?
            (<View style = { styles.loadingContainer }>
                <ActivityIndicator size = "large" />
                <Text style = { styles.loadingText }>Please Wait...</Text>
            </View>)
        :
        (<View style = {{ flex: 1 }}>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.changeView }>
                    <Text style = { styles.btnText }>{ this.state.btnText }</Text>
                    </TouchableOpacity>
           
        </View>
        <View style={{flex:1}}>
           <FlatList keyExtractor = {(item) => item.id} key = {( this.state.gridView ) ? 1 : 0 } numColumns = { this.state.gridView ? 2 : 1 } data = { this.state.imagesData } renderItem = {({ item }) =>
                <ImageComponent imageURI = { item.file_path } name = { item.name.toUpperCase() } />
              }/>
        </View>
            
            
          </View>)
        }          
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
    loadingContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  loadingText:
  {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },
 
  Btn:
  {
    padding: 15,
    backgroundColor: '#FF4500'
  },
  btnText:
  {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch'
  }
   
});

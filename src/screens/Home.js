import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,AsyncStorage } from 'react-native';

import { LoginButton, AccessToken,GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      name : '',
      pic : ''
    }
  }

  
  componentDidMount() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: data.accessToken || "",
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name,picture,id'
                }
              }
            },
            this.responseInfoCallback
          );
         new GraphRequestManager().addRequest(infoRequest).start();
       
      })
    }
    infoRequestNew(accessToken){
      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken: accessToken,
          parameters: {
            fields: {
              string: 'email,name,first_name,middle_name,last_name,picture,id'
            }
          }
        },
        this.responseInfoCallback
      );
      // Start the graph request.
      new GraphRequestManager().addRequest(infoRequest).start()

    }

  responseInfoCallback = (error, result) => {
    if (error) {
      console.log(error)
      alert('Error fetching data: ' + error.toString());
    } else {
      console.log(result)
      this.setState({name: result.name, pic:result.picture.data.url});
    }
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Reactjhjh Native!</Text>
        <Text style={styles.name}>{this.state.name}</Text>
      <Image source={{uri:this.state.pic || `http://www.tiptoncommunications.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png`}} style={{width:120,height:120}} />
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    const accessToken = data.accessToken
                    this.infoRequestNew(accessToken);
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
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

import React,{ Component} from 'react';
import {Text,View,TouchableOpacity,Alert} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

class SocialLogin extends Component{

    constructor(props){
        super(props)
        this.state={
            userinfo:'',
            username:'',
            email:'',
            error:''
        }
    }

    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo, error: null });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
            Alert.alert('cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
            Alert.alert('in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('play services not available or outdated');
          } else {
            Alert.alert('Something went wrong', error.toString());
            this.setState({
              error,
            });
          }
        }
      };

    render(){
        return(
            <View>
                <Text>
                    Hello Social Login
                </Text>
                <GoogleSigninButton
                    style={{ width: 212, height: 48 }}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Auto}
                    onPress={this._signIn}
                    />
            </View>
        )
    }
}

export default SocialLogin;
# reactSocialLogin

FB login

react-native install react-native-fbsdk --save
react-native link react-native-fbsdk

MainApplication.java

package com.myproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
  return mCallbackManager;
}

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
             new FBSDKPackage(mCallbackManager)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
     FacebookSdk.sdkInitialize(getApplicationContext());
  }

}

============================================================================================
MainActivity.java

package com.spero;
import com.facebook.react.ReactActivity;
import android.content.Intent; //add

public class MainActivity extends ReactActivity {

    @Override   //add
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
    @Override
    protected String getMainComponentName() {
        return "Spero";
    }
}
====================================================================================================
Head over to “strings.xml” located at android/app/src/main/res/values/strings.xml and add a new string with your facebook app id.

<resources>
    <string name="app_name">NameOfYourApp</string>
    <string name="facebook_app_id">YOUR-FACEBOOK-ID</string>
</resources>
===========================================================================================================
Head over to AndroidManifest.xml located at “android/app/src/main” and add the following code right before

<activity android:name="com.facebook.FacebookActivity"
  android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
  android:theme="@style/com_facebook_activity_theme"
  android:label="@string/app_name" />
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
=============================================================================================================
https://tylermcginnis.com/installing-the-facebook-sdk-into-a-react-native-android-and-ios-app/
https://www.npmjs.com/package/react-native-fbsdk
https://medium.com/react-native-training/facebook-sdk-with-login-for-react-native-apps-in-2018-196601804f66
https://medium.com/building-with-react-native/coding-with-facebook-login-in-react-native-like-a-pro-1x06-9064fc2f5bfc
=======================================================================================================================
Home.js

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

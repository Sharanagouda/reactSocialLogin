import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import Home from './../screens/Home';
import GooggleLogin from './../screens/Social';
import FaceBookLogin from './../screens/SocialLogin';
import BarCodeScanner from '../screens/BarCodeScanner';
import CustomAlert from '../screens/CustomAlert';
import EnableGPS from "../screens/EnableGPS";

class Routes extends Component {

  
  render() {
    return (
        <Router>
        <Scene key="root" initial = {true}>
          <Scene key="enableGps" component={EnableGPS} title="Enable GPS"/>
          <Scene key="customAlert" component={CustomAlert} title="Custom Alert" />
          <Scene key="home" component={Home} title="Home" />
          <Scene key="googinPage" component={GooggleLogin} title="Google login"/>
          <Scene key="facebookpage" component={FaceBookLogin} title="FaceBook Login"/>
          <Scene key="barcodeScanner" component={BarCodeScanner} title="BarCodeScanner"/>
        </Scene>
      </Router>
    );
  }
}

export default Routes;

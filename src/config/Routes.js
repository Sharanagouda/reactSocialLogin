import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import Home from './../screens/Home';
import GooggleLogin from './../screens/Social';
import FaceBookLogin from './../screens/SocialLogin';
import BarCodeScanner from '../screens/BarCodeScanner';
import CustomAlert from '../screens/CustomAlert';
import CreditAndDebitDetails from "../screens/CreditAndDebitDetails";
import LoyaltyCardDetails from "../screens/LoyaltyCardDetails";
import GoFuelCardDetails from "../screens/GoFuelCardDetails";
import GoCards from '../screens/GoCards';
import LoyaltyCards from '../screens/LoyaltyCards';

class Routes extends Component {

  
  render() {
    return (
        <Router>
        <Scene key="root" initial = {true}>
          <Scene key="loyaltyCards" component={LoyaltyCards} title="Loyalty cards"/>
          <Scene key="goCards" component={GoCards} title="Go Cards"/>
          <Scene key="home" component={Home} title="Home" />
          <Scene key="googinPage" component={GooggleLogin} title="Google login"/>
          <Scene key="facebookpage" component={FaceBookLogin} title="FaceBook Login"/>
          <Scene key="barcodeScanner" component={BarCodeScanner} title="BarCodeScanner"/>
          <Scene key="goFuelCardDetails" component={GoFuelCardDetails} title="Go FuelCard Details"/>
          <Scene key="loyaltyCardDetails" component={LoyaltyCardDetails} title="Loyalty Card Details"/>
          <Scene key="enableGps" component={CreditAndDebitDetails} title="Go Fuel Card"/>
          <Scene key="customAlert" component={CustomAlert} title="Custom Alert" />
  </Scene>
      </Router>
    );
  }
}

export default Routes;

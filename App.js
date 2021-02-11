import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text} from 'react-native'
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Deviation from Tutorial: LoginScreen was not mentioned but needed to be added to work.
const firebaseConfig = {
  apiKey: "AIzaSyC5cXsnL9mj0FNEQovdkNCqT4Yxy2J_x2U", //For actual production, use environmental variables. Hide api key.
  authDomain: "eom-characters.firebaseapp.com",
  projectId: "eom-characters",
  storageBucket: "eom-characters.appspot.com",
  messagingSenderId: "499328497957",
  appId: "1:499328497957:web:6c90631aea08608f4082cc",
  measurementId: "G-RJP965LYYY"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/> 
        </Stack.Navigator>
      </NavigationContainer>    
      );
    }

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>User is logged in</Text>
      </View>
    )
  }
}

export default App


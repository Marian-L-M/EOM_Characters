import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

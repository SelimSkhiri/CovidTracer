import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import contact_tracing from './screens/contact_tracing';
import get_started from './screens/get_started'
import symptoms from './screens/symptoms';
import updates from './screens/updates';
import welcome from './screens/welcome'; 

import firebase from 'firebase/app'
import 'firebase/auth'

import { Provider } from 'react-native-paper'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from './src/screens'
import { DefaultTheme } from 'react-native-paper'

import AuthLoadingScreen  from './src/screens/AuthLoadingScreen'

import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#2196f3',
    secondary: '#414757',
    error: '#f13a59',
  },
}


const Drawer = createDrawerNavigator();



function drawer() {
  return (
       <Drawer.Navigator initialRouteName="WELCOME">
          <Drawer.Screen name="WELCOME" component={welcome} options ={{headerShown: true}}/>
          <Drawer.Screen name="CONTACT TRACING" component={contact_tracing} options ={{headerShown: true}}/>
          <Drawer.Screen name="UPDATES" component={updates}  options ={{headerShown: true}}/>
          <Drawer.Screen name="SYMPTOMS" component={symptoms} options ={{headerShown: true}}/>
      </Drawer.Navigator>
  );
} 


function App() {
  return (
  <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthLoadingScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen}/>
        <Stack.Screen name="Home" component={get_started} options={{ title: null, headerLeft: null, headerShown: false }}/>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{headerLeft: null, headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={drawer} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  </Provider> 
  );
} 


export default App

import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View} from "react-native";
//import {NavigationContainer} from '@react-navigation/native';


//const onPress = () => setCount(prevCount => prevCount + 1);
export default function get_started({navigation}) {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/Logo.png')}
          />
          <Text style={styles.title}>COVID Tracker</Text>
          <Text style={styles.title}>ENISO</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('StartScreen')}
      >
        <Text style={styles.buttonText}>   GET STARTED  </Text>
      </TouchableOpacity>
     </View>
    );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#03070a",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height:120, 
    width:120,
    marginBottom: 30
  },

  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "#ffffff"
  }, 
  button: {
    backgroundColor: '#2196f3', 
    borderRadius: 3,
    position: 'absolute',
    bottom:69,
    height: 48,
    width: 300
  },
  buttonText:{ 
    color: 'white',
    fontSize: 16, 
    textAlign: 'center', 
    justifyContent: 'center',
    margin: 13, 
    fontWeight: 'bold'
  }
});

//AppRegistry.registerComponent("App", () => App);

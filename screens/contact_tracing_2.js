import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View} from "react-native";

const onPress = () => setCount(prevCount => prevCount + 1);
export default function contact_tracing(navigation) {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
        <Text style={styles.text}> Contact Tracing is</Text>
        <Text style={styles.text}>  currently disabled</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('enabled')}
      >
        <Text style={styles.buttonText}>Enable</Text>
      </TouchableOpacity>
     </View>
    );
}



export { contact_tracing as disabled }


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#eff1f8",
    //justifyContent: 'center',
    alignItems: 'center'
  },
  text : {
    fontSize: 24,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logo: { 
    height:80, 
    width:80, 
    //justifyContent: 'center', 
    //alignItems: 'center',
    //position: 'absolute'
  },

  header: {
    padding: 20,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "black"
  },
  button: {
    backgroundColor: '#2196f3', 
    borderRadius: 30,
    position: 'absolute',
    bottom:169,
    height: 35,
    width: 169
  },
  buttonText:{ 
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16, 
    textAlign: 'center', 
    justifyContent: 'center',
    margin: 7
  }
});
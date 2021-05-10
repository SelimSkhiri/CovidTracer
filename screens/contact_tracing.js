import React, { Component } from "react";
import {
  Image,
  TouchableOpacity, ImageBackground,
  StyleSheet,
  Text,
  View} from "react-native";

const onPress = () => setCount(prevCount => prevCount + 1);
export default function contact_tracing(navigation) {
    return (
      <View style={styles.app}>
        <ImageBackground source={image} style={styles.image}>
        </ImageBackground>     

        <View>
        <Text style={styles.text}> Contact Tracing is</Text>
        <Text style={styles.text}>  currently enabled</Text>
          <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/ok.png')}
          />
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('disabled')}
      >
        <Text style={styles.buttonText}>Disable</Text>
      </TouchableOpacity>
     </View>
    );
}

const image = { uri: 'https://i.imgur.com/eYQVsDf.png'}


export { contact_tracing as enabled }


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#eff1f8",
    alignItems: 'center',  },
  text : {
    fontSize: 24,
    opacity: 0.95,
    fontWeight: 'bold'
  },
  logo: { 
    paddingBottom: 150,
    marginBottom: 100, 
    marginLeft: 59,
    height:80, 
    width:80, 
  },

  button: {
    backgroundColor: '#2196f3', 
    borderRadius: 30,
    position: 'absolute',
    bottom:69,
    height: 35,
    width: 169, 
    marginTop: 100
  },
  buttonText:{ 
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16, 
    textAlign: 'center', 
    justifyContent: 'center',
    margin: 7
  },
  image: {
    flex: 1,
    width: '100%',
    height: 569,
    resizeMode: 'cover',
    opacity: 0.95,
    backfaceVisibility: 'visible',


  }
});
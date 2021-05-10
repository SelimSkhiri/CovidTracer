import React, { Component } from "react";
import {
  Image,
  StyleSheet, ImageBackground,
  Text,
  View, SafeAreaView, ScrollView} from "react-native";


export default function updates() {
    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>

      <ScrollView style={styles.scrollView}>
        <View>
          <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/Stats.jpg')}
          />
          <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/Stats2.jpg')}
          />
          <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/Stats3.jpg')}
          />
          <Text>
          {'\n'}
         </Text>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
    );
}

const image = { uri: 'https://i.imgur.com/eYQVsDf.png'}

const styles = StyleSheet.create({
    container: {
    flex: 1
  },
  scrollView: {
    marginHorizontal: 1,
  },
  logo: {
    height:400, 
    width:'100%'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.95,
    backfaceVisibility: 'visible',


  }
});
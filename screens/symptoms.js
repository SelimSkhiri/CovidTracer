import React from 'react'
import { StatusBar ,StyleSheet, Text, View,ImageBackground,SafeAreaView,ScrollView } from 'react-native';

class Symptoms extends React.Component {
  render() {
    return (

        <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.view1}>
            <Text style={styles.title}>
            Symptoms

            </Text>
        <Text style={styles.simple}>
        {'\n'}
        People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:
        {'\n'}
        {'\n'}
        * Fever or chills
        {'\n'}
        * Cough
        {'\n'}
        * Shortness of breath or difficulty breathing
        {'\n'}
        * Fatigue
        {'\n'}
        * Muscle or body aches
        {'\n'}
        * Headache
        {'\n'}
        * New loss of taste or smell
        {'\n'}
        * Sore throat
        {'\n'}
        * Congestion or runny nose
        {'\n'}
        * Nausea or vomiting
        {'\n'}
        * Diarrhea
        {'\n'}
        </Text>
        <Text style={styles.gras}>When to seek emergency medical attention</Text>
         <Text style={styles.simple}>
         {'\n'}
         Look for emergency warning signs* for COVID-19.
         If someone is showing any of these signs, seek emergency medical
        care immediately: {'\n'}{'\n'}
        * Trouble breathing
        {'\n'}
        * Persistent pain or pressure in the chest
        {'\n'}
        * New confusion
        {'\n'}
        * Inability to wake or stay awake
        {'\n'}
        * Bluish lips or face
        {'\n'}
        {'\n'}
        {'\n'}
         </Text>
          </View>
            </ScrollView>
            </ImageBackground>
          </SafeAreaView>


      );

  }
}
const image = { uri: 'https://i.imgur.com/eYQVsDf.png'}
const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.95,
    backfaceVisibility: 'visible',


  },
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    marginTop: 20,
    marginLeft:10,
    marginRight: 5,
    paddingTop: StatusBar.currentHeight

  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'italic',
  },
  simple: {
    color: 'black',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
  },
  gras: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

});

export default Symptoms

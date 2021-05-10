import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,Button,
  Text,
  View} from "react-native";


  export default function welcome() {
    return (
      <View style={styles.app}>
        <Image style={styles.logo}  resizeMode="contain"
          source={require ('./assets/LogoEniso.png')}
          />
          <Text style={styles.text}>     </Text>
          <Text style={styles.text}> Welcome </Text>
          <Text style={styles.text}>     </Text>
          <Text style={styles.text}>       This app is for you       </Text>
          <Text style={styles.text}>   and your colleagues' safety </Text>
     </View>
    );
}



const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#eff1f8",
        justifyContent: 'center', 
    alignItems: 'center'
  },
  text : {
    fontSize: 22,
    //color: '#27a1f2'
    color: 'black'
  },
  logo: { 
    height:269, 
    width:269, 
  },
}); 




/*export default class App extends Component {
  state = {
    textValue: 'Change me'
  }

  onPress = () => {
    this.setState({
      textValue: 'THE NEW TEXT GOES HERE',
      showImage: true
    })
  }

  render() {
    return (
      <div>
                {this.state.showImage &&
      <View style={{paddingTop: 25}}>
         <Image style={styles.logo} resizeMode="contain"
          source={require ('./assets/LogoEniso.png')}
          />
        <Text>{this.state.textValue}</Text>
        <Button title="Change Text" onPress={this.onPress} />
      </View>}
  </div>
    )
  }
}




const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#eff1f8",
        justifyContent: 'center', 
    alignItems: 'center'
  },
  text : {
    fontSize: 22,
    //color: '#27a1f2'
    color: 'black'
  },
  logo: { 
    height:269, 
    width:269, 
  },
}); */
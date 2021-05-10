import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/Logotefeh.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 132,
    height: 132,
    marginBottom: 8,
  },
})

export default Logo

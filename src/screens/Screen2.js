import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

export default function Screen2({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Screen 2</Text>
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
  });
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

export default function Screen3({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Screen 3</Text>
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
  });
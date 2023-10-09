import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default  BotonReutilizable = ({texto, onPress, style}) => {

  const handleOnPress = () => {
    const date = new Date();
    console.log('Fecha y Hora:', date.toUTCString());
    onPress();
  }
  
  return (
    
    <TouchableOpacity 
        onPress={() => handleOnPress()}
        style={[styles.button1, style]}>
        <Text style={[styles.textButton]}>{texto}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      width: '90%',
      height: 60,
      backgroundColor: 'black',
      borderRadius: 15
    },
    textButton: {
      color: 'white',
      width: '100%',
      textAlign: 'center',
      marginTop: 18,
      fontSize: 15,
    }
  });
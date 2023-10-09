import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import BotonReutilizable from '../components/BotonReutilizable'
import UsuarioService from '../services/UsuarioService'

export default function Screen1({navigation}) {

  let usuarioService = new UsuarioService();

  const alertAsyncStorage = async () => {
    let credenciales = await usuarioService.obtenerCredenciales();
    Alert.alert('ASYNCSTORAGE', JSON.stringify(credenciales));
  }

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Screen 1</Text>
      <Menu navigation={navigation}/>
      <Boton onPress={alertAsyncStorage} titulo='VER ASYNCSTORAGE' style={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white'
    },
    button: {
      marginTop: 20,
      width: 300,
      height: 60,
      backgroundColor: 'black',
      borderRadius: 15
    },
  });
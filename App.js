import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack' 
import { NavegationContainer } from '@react-navigation/native' 

const Stack = createStackNavigator()

export default function App() {

  const imageExterno_react = {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'}
  const [text, setText] = useState('')

  return (
    <NavegationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </NavegationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerArriba: {flex: 5,backgroundColor: 'white',},  
  ContainerAbajo: {flex: 4, backgroundColor: 'blue',},  
  Container: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    marginTop: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15,
  
  },
  textButton: {
    color: 'white',
    width: '100%',
    textAlign: 'center',

    fontSize: 15,
  },
  textPressable: {
    color: 'black',
    width: '100%',
    textAlign: 'center',

    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,

  },
});

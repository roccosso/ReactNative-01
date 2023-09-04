import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack' 
import { NavigationContainer } from '@react-navigation/native' 
import LoginScreen from './src/screens/LoginScreen'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'



export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          orientation: 'portrait',
          headerShown: false,
          animation: 'none', 
        }}>        
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'LoginScreen'}}
        />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

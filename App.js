import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imageExterno_react = {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={(imageExterno_react)}>
        <Text>Esta es la aplicacion de Brock y Foxy</Text>
       
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38DB96',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

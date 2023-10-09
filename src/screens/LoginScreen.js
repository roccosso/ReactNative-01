import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import kipling from "../../assets/kipling.jpg";

export default function LoginSc({ navigation }) {
    
  const [password, setPassword] = useState("");

  const HandleLogin = () => {
    console.log(password)
    if(password.toLowerCase() === "kipling") {
        navigation.navigate("Screen1");
    } else {
      alert("La contraseña es incorrecta");
    }
  };

  return (
    <>
      <View style={StyleSheet.container}>
        <Image source={kipling} style={styles.image} />
        <View style={{ paddingTop: 50, textAlign: "center" }}>
          <TextInput
            editable
            maxLength={20}
            style={styles.input}
            placeholder="Ingrese su nombre"
          />
          <TextInput
            editable
            maxLength={20}
            style={styles.input}
            onChangeText={value => setPassword(value)}
            placeholder="Ingrese su contraseña"
          />
          <Pressable style={styles.button} onPress={HandleLogin}>
            <Text>INGRESAR</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    borderColor: "Black",
    borderWidth: 2,
    width: 200,
    height: "auto",
    padding: 10,
    margin: 5,
  },
  image: {
    marginTop: 50,
    width: '100%',
    height: 300,
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "red",
    width: 300,
    height: 50,
    borderRadius: 5,
  },
});

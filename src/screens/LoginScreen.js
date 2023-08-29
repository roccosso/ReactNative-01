import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    Button
}   from "react-native";
import kipling from "https://static.wikia.nocookie.net/disney/images/4/4c/Sra._Kipling.png/revision/latest?cb=20130710173048&path-prefix=es";

export default function Login({navigation
}) {

    const [password, setPassword] = useState("");

    const HandleLogin = () =>{
        if (password.toLoweCase() === "Kipling") {
            navegation.navinate('LoginScreen')
        }else{
            alert('La contraseña es incorrecta')
        }
    }

    return (
    <>
        <View style={StyleSheet.container}>
            <Image souerce={kipling} style={StyleSheet.image} />
            <View style={{ paddingTop: 50, textAlign: "center"}}>
                <TextInput placeHolder= "nombre" style={styles.input}></TextInput>
                <TextInput placeHolder= "contraseña" style={styles.input} onChangeText={setPassword} name="password"></TextInput>
                <Pressable style={styles.button} onPress={HandleLogin}>
                    <Text>continuar</Text>
                </Pressable>
            </View>

        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flex: 1,
        backgroundColor: "#fff", 
        alignItems: "center",
    },
    input:{
        borderColor: "Black",
        borderWidth: 2,
        width: 200,
        height: "auto",
        padding: 10,
        margin: 5,
    },
    image: {
        marginTop: 50,
        width: 200,
        height: 300,
    },
    button: {
        marginTop: 20,
        justifyContent: "center",
        backgroundColor: "red",
        width: 40,
        height: 200,
        borderRadius: 5,
    },
});
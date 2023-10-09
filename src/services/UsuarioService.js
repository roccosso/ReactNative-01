import AsyncStorage from "@react-native-async-storage/async-storage"; 

const USERNAME_KEY='LOGIN_username';
const PASSWORD_KEY='LOGIN_password';

export default class UsuarioService{ 
  
    login = async(userName, password) => { 
        let isValid;
        try {            
            if(userName == 'facundo' && password == 'liponetzky'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 
        } catch(e){
            return false;
        }
        
    };

    automaticlogin = async() => { 
        try {
            let usuario = await AsyncStorage.getItem(USERNAME_KEY);
            let contrasena = await AsyncStorage.getItem(PASSWORD_KEY);
            let isValid;
            
            if(usuario == 'facundo' && contrasena == 'liponetzky'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 

        } catch(e){
            return false;
        }
    };

    eliminarCredenciales = async() => { 
        try{
            await AsyncStorage.removeItem(USERNAME_KEY); 
            await AsyncStorage.removeItem(PASSWORD_KEY); 
        }catch(e){
            console.log(e);
        }
    }; 

    almacenarCredenciales = async(userName,password) => { 
        try {    
            await AsyncStorage.setItem(USERNAME_KEY, userName);  
            await AsyncStorage.setItem(PASSWORD_KEY, password); 
        } catch(e) {    
            console.log(e);
        }
    }; 

    obtenerCredenciales = async() => { 
        let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
        let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
        const returnValue = {'userName':storedUserName, 'password':storedPassword}; 
        return returnValue; 
    }; 
} 
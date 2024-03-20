import React, {useState } from 'react';
import {View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert, Image  } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const usuarios = [
    { usuario: 'Gabriel', password: '275890' }, 
    { usuario: 'César', password: '275880' },
  ];

  const handleSubmit = () => {
    const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.password === password);

    if (usuarioEncontrado) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Usuario no autenticado');
    }
  };

  const handleUsuarioChange = (usuario) => {
    if (usuario.length > 24) {
      Alert.alert('El usuario no puede tener más de 24 caracteres');
    } else {
      setUsuario(usuario);
    }
  };

  const handlePasswordChange = (password) => {
    if (password.length > 16) {
      Alert.alert('La contraseña no puede tener más de 16 caracteres');
    } else {
      setPassword(password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spot</Text>

      <Image style={styles.logo} source={require('./assets/Imagen2.png')}/>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Usuario"
          maxLength={24}
          TextEntry={true}
          onChangeText={handleUsuarioChange}
          value={usuario}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  inputContainer: {
    width: '60%',
  },
  TextInput: {
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: 20,
    width: '35%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

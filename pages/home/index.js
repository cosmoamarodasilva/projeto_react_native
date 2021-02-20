import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity} from 'react-native';


export default function App(props) {
    const {navigation} = props
    return (
    <View style={styles.container}>
      
      <StatusBar hidden />
      <Text></Text>
      <TouchableOpacity style = {styles.entrar}  onPress = {() => navigation.navigate('Login')}><Text style = {styles.entrarTexto}>Login</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.entrar}  onPress = {() => navigation.navigate('produtos')}><Text style = {styles.entrarTexto}>Produtos</Text></TouchableOpacity>

    </View>
  );

}

/*Estilizando as views*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerMain: {
    flex: 1,
    alignItems: 'center',
  },

  entrar: {
    height:50,
    backgroundColor: 'orange',
    alignItems: 'center',
    width: 200,
    borderRadius: 10,
    marginBottom: 270,
  },

  entrarTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 'auto'
  },

  imagem: {
    width: 100,
    height: 100,
    marginVertical: 50
  },

});



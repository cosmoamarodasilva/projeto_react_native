import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity} from 'react-native';
import Input from './../../componentes/inputs.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image source = {require('./../../assets/favicon.png')} style={styles.imagem}/>

      <View style = {styles.containerMain}>
      <Input placeholder = 'email' />
      <Input placeholder = 'senha' senha = {true} tipoteclado = 'default' />
      </View>

      <TouchableOpacity style = {styles.entrar}><Text style = {styles.entrarTexto}  onPress = {() => Alert.alert('Você está logado')}>Entrar</Text></TouchableOpacity>
      
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
    width: '100%',
    alignItems: 'center',
  },

  entrar: {
    height:50,
    backgroundColor: 'orange',
    alignItems: 'center',
    width: '60%',
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



import { StatusBar} from 'expo-status-bar';
import React from 'react';
import {TextInput, View, Text, StyleSheet  } from 'react-native';

export default function input ({placeholder, senha= false, tipoTeclado ='email-address'}){
    return <TextInput style = {css.input} placeholder = {placeholder} secureTextEntry = {senha} keyboardType = {tipoTeclado} />
}

const css = StyleSheet.create({
    input : {
        width: '90%',
        height: 50,
        paddingLeft:10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10, 
        fontSize: 20

    }
})
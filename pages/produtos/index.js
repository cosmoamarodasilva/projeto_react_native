import React from 'react';
import {View, FlatList, StyleSheet, Text, Image } from 'react-native';
import Icon from './../../assets/TV4K.jpg';
import Refrigerador from './../../assets/Refrigerador_consul.jpg'
import Videogame from './../../assets/videogameconsole.jpg'

export default function Produtos () {
    const DADOS = [
        {
            nome: 'TV 4K',
            preco: 1000,
            imagem: Icon,
        },

        {
            nome: 'Refrigerador Consul',
            preco: 800,
            imagem: Refrigerador,
        },

        {
            nome: 'Video Game com console',
            preco: 800,
            imagem: Videogame,
        }
    ]

function Produto({item}){
    return <View style = {styles.produtoBox}>
        <View style = {styles.produtoBoxBG}>
            <Image source = {item.imagem} style = {styles.produtoImagem} />
            <View style = {styles.produtoBoxText}>
                <Text style = {styles.produtoNome}>{item.nome}</Text>
                <Text style = {styles.produtoPreco}>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
            </View>
        </View>
      
    </View>
}

return( <View style = {styles.container}>
    <Text>Pagina de Produtos</Text>
    <FlatList
        data = {DADOS}
        renderItem = {Produto}
    
    />
</View>
)};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6abc9',
        alignItems: 'center',
        justifyContent: 'center',
    },

produtoBox :{
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
},

produtoBoxBG:{
    width: '80%',
    backgroundColor: 'rgba (255, 255, 255, 0.3)',
    paddingBottom: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba (255, 255, 255, 0.3)',
},

produtoImagem:{
    width:'100%',
    height: 200,
    resizeMode: 'contain',
},

produtoBoxText:{
    backgroundColor: 'rgba( 0,0,0, .3)',
    marginHorizontal: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: 'center',

},

produtoNome:{
    color: 'white',
    fontSize: 24,
},
produtoPreco:{
    color: 'white',
    fontSize: 20,
}

})


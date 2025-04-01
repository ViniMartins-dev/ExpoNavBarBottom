import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native';

const info = [
  {
    titulo: 'Musica 1',
    artista: 'artista',
    imagem: './assets/metallicaAlbumCover.jpg'
  },
  {
    titulo: 'Musica 2',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 3',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 4',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 5',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 6',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 7',
    artista: 'artista',
    imagem: ''
  },
  {
    titulo: 'Musica 8',
    artista: 'artista',
    imagem: ''
  },
];

const Item = ({ titulo, artista, imagem }) => (
 


  <View style={estilo.item}>
    <View style={estilo.imagem}>
      
    </View>
    <View>
      <Text style={estilo.faixa}>{titulo}</Text>
      <Text style={estilo.artista}>{artista}</Text>
    </View>
  </View>
);


export default function Playlist() {
  return (
    <SafeAreaView style={estilo.container}>
      <FlatList
        data={info}
        renderItem={({ item }) => (
          <Item titulo={item.titulo} artista={item.artista} />
        )}
      />
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0F0F0F',
    padding: 10,
  },
  titulo: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#232D3F',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 100,
    flexDirection: 'row'
  },
  faixa: {
    fontSize: 25,
    color: '#008170'
  },
  artista: {
    fontSize: 15,
    color: '#008170'
  },
  imagem: {
    backgroundColor: '#FFFFFF',
    height: 80,
    width: 80,
    objectFit: 'cover',
    marginRight: 10
  },
  caixa: {
    flexDirection: 'column'
  }
});

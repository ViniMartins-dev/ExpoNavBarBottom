import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const info = [
  { titulo: 'Música 1', artista: 'Artista 1', imagem: '' },
  { titulo: 'Música 2', artista: 'Artista 2', imagem: '' },
  { titulo: 'Música 3', artista: 'Artista 3', imagem: '' },
  { titulo: 'Música 4', artista: 'Artista 4', imagem: '' },
  { titulo: 'Música 5', artista: 'Artista 5', imagem: '' },
  { titulo: 'Música 6', artista: 'Artista 6', imagem: '' },
  { titulo: 'Música 7', artista: 'Artista 7', imagem: '' },
  { titulo: 'Música 8', artista: 'Artista 8', imagem: '' },
];

const Item = ({ titulo, artista }) => (
  <View style={estilo.card}>
    <View style={estilo.imagemPlaceholder} />
    <View style={estilo.textos}>
      <Text style={estilo.cardTitulo}>{titulo}</Text>
      <Text style={estilo.cardDescricao}>{artista}</Text>
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
        contentContainerStyle={estilo.resultadoContainer}
      />
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 10,
  },
  resultadoContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemPlaceholder: {
    backgroundColor: '#d1d5db',
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  textos: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  cardDescricao: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
  },
});

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={estilo.container}>
      <View style={estilo.perfil}>
        <View style={estilo.imagemContainer}></View>
          <View style={estilo.nomeContainer}>
            <Text>Nome: nome</Text>
            <Text></Text>
          </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8393',
    padding: 10,
  },
  perfil: {
    backgroundColor: '#c0c0c0',
    padding: 10,
    height: 300,
    borderRadius: 3,
    flexDirection:  'row'
  },
  imagemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '100%',
    height: 100,
    width: 100,
    marginRight: 10
  },
  nomeContainer: {
    backgroundColor: '#FFFFFF',
    padding: 3
  },
  titulo: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

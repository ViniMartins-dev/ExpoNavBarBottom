import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';

export default function Home() {
  return (
    <View style={estilo.container}>
      <SearchBar
        platform="android"
        placeholder="Type query here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
      />
      <Text style={estilo.titulo}>Home</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8393',
    padding: 10,
  },
  titulo: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

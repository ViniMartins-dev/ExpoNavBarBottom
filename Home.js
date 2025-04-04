import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from '@rneui/themed';

export default function Home() {
  const [busca, setBusca] = useState('');
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const resultados = [
    { titulo: 'Item 1', descricao: 'Descrição do item 1' },
    { titulo: 'Item 2', descricao: 'Descrição do item 2' },
    { titulo: 'Item 3', descricao: 'Descrição do item 3' },
    { titulo: 'Item 4', descricao: 'Descrição do item 4' },
    { titulo: 'Item 5', descricao: 'Descrição do item 5' },
  ];

  const handlePesquisar = () => {
    if (busca.trim() !== '') {
      setMostrarResultados(true);
    } else {
      setMostrarResultados(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={estilo.card}>
      <Text style={estilo.cardTitulo}>{item.titulo}</Text>
      <Text style={estilo.cardDescricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={estilo.container}>
      <SearchBar
        platform="android"
        placeholder="Pesquisar..."
        placeholderTextColor="#888"
        onChangeText={(texto) => setBusca(texto)}
        value={busca}
        onSubmitEditing={handlePesquisar}
        onClear={() => {
          setMostrarResultados(false);
          setBusca('');
        }}
      />

      {!mostrarResultados && busca.trim() === '' && (
        <View style={estilo.textoCentralContainer}>
          <Text style={estilo.textoCentral}>Faça uma pesquisa</Text>
        </View>
      )}

      {mostrarResultados && (
        <FlatList
          data={resultados}
          renderItem={renderItem}
          contentContainerStyle={estilo.resultadoContainer}
        />
      )}
    </View>
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
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
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
  textoCentralContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCentral: {
    fontSize: 18,
    color: '#6b7280',
  },
});

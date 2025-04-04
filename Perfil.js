import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Perfil() {
  return (
    <View style={estilo.container}>
      <View style={estilo.cartao}>
        <View style={estilo.imagemWrapper}>
          <View style={estilo.foto}>
            <Text style={estilo.placeholderTexto}>Imagem</Text>
          </View>
          <TouchableOpacity style={estilo.botaoImagem}>
            <MaterialIcons name="add-a-photo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={estilo.nome}>Vinicius Martins</Text>
        <Text style={estilo.email}>vinicius.martins@email.com</Text>

        <View style={estilo.infoBox}>
          <Text style={estilo.label}>Telefone</Text>
          <Text style={estilo.valor}>(11) 91234-5678</Text>

          <Text style={estilo.label}>Cidade</Text>
          <Text style={estilo.valor}>São Paulo - SP</Text>

          <Text style={estilo.label}>Nascimento</Text>
          <Text style={estilo.valor}>01/04/2004</Text>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cartao: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imagemWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderTexto: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  botaoImagem: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3B82F6',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 4,
  },
  iconeBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },
  valor: {
    fontSize: 16,
    color: '#374151',
  },
});

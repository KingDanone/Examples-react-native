import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Estilizando o aplicativo</Text>
      <Text style={estilos.texto}>Usando estilo inline</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  texto: {
    color: 'white',
    fontSize: 20
  }
});

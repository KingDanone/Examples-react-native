import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoBase}>
        Exemplo de palavra <Text style={styles.destaque}>destacada</Text> das demais
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#fff', // Adicionei um fundo para visibilidade
  },
  textoBase: {
    fontSize: 18,
    color: '#333',
  },
  destaque: {
    fontWeight: 'bold',
    color: 'rebeccapurple', // Destaque visual opcional
  },
});

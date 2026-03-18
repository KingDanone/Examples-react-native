import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bart mizeravão Ai</Text>

      <Image
        source={require('./assets/bart-img.png')}
        style={styles.img}
      />

      <Text>Bart Simpson</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150
  }
});

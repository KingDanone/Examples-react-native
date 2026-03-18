import React from 'react';
import { StyleSheet, View } from 'react-native';

import Conteudo from './components/Conteudo/index.js';
import Topo from './components/Topo/index.js';

export default function App() {
  return (
    <View style={ estilos.containerTopo }>
      <Topo />
      <Conteudo />
    </View>
  );
}

const estilos = StyleSheet.create({
  containerTopo: {
    flex: 1,
  }
});

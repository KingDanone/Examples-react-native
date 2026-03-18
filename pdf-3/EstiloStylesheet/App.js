import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        Estilizando o aplicativo
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 36,
    color: 'white',
  },
});
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={ styles.texto}>O Mistério da "Lua Azul"</Text>

      <Image
        source={require('./assets/lua.png')}
        style={ styles.img}
      />

      <Text style={styles.paragrafo}>
        Apesar do nome, a Lua Cheia não fica azul!
        O termo Lua Azul é usado quando ocorrem duas luas cheias no mesmo mês,
        um fenômeno raro que acontece apenas a cada dois ou três anos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1026',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texto: {
    fontSize: 50,
    textAlign: 'center',
    color: '#F5E7C3'
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 400,
    height: 400
  },
  paragrafo: {
    marginTop: 20,
    textAlign: 'center',
    color: '#F5E7C3'
  }
});

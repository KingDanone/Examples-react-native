import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>A Raposa do Ártico</Text>

      <Image
        source={require('./assets/raposa.png')}
        style={styles.img}
      />

      <Text style={styles.paragrafo}>
        As raposas-do-ártico são mestres da camuflagem! 
        Sua pelagem muda de cor conforme a estação: fica branca na neve 
        do inverno e marrom ou cinza durante o verão para se misturar às rochas.
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
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 32,
    textAlign: 'center',
    color: '#F5E7C3',
    fontWeight: 'bold'
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  paragrafo: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#F5E7C3',
    lineHeight: 24
  }
});

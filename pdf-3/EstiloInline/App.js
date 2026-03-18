import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <Text style={{
        fontSize: 36,
        color: 'white'
      }}>
        Estilizando o aplicativo
      </Text>

    </View>
  );
}

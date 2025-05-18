import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContadorSimples() {

  const [contador, setContador] = useState(0);
  const [messageCount, setMessageCount] = useState<string | null>(null);


  function aumentar() {
    setContador(contador + 1);
    setMessageCount('Contador Incrementado')
  }

  function diminuir() {
    setContador(contador - 1);
    setMessageCount('Contador Decrementado')
  }

  function resetar() {
    setContador(0);
    setMessageCount('Contador Reiniciado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.contador_container}>
        <Text style={styles.contador_text}>{contador}</Text>
      </View>

      <Text style={styles.text}>{messageCount}</Text>

      <View style={styles.botoes_container}>
        <TouchableOpacity style={[styles.botoes , {backgroundColor: '#FF6B6B'}]} onPress={diminuir} >
          <Text style={styles.botoes_text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botoes , {backgroundColor: '#4ECDC4'}]} onPress={resetar} >
          <Text style={styles.botoes_text}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botoes ,  {backgroundColor: '#5AC9A5'}]} onPress={aumentar} >
          <Text style={styles.botoes_text}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.text, { position: 'absolute', bottom: 10 }]}>Aprenda React Native Com Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: '600',
  },

  text: {
    color: "#9A9A9A",
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
  },

  contador_text: {
    fontSize: 64,
    fontWeight: 'bold',
  },

  contador_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: '100%',
    backgroundColor: 'white',
    marginVertical: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  botoes_container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding : 20,
  },

  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: '100%',
    marginTop: 10,
    backgroundColor: 'red',
  },

  botoes_text:{
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  }
});

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BookDetails() {
  return (
    <View style={s.Wrapper}>
      <Text style={s.Title}>📚 Livraria Digital</Text>
      <Text style={s.SubTitle}>Descubra seu próximo livro favorito</Text>

      <TouchableOpacity style={s.Button} activeOpacity={0.8} >
        <Text style={s.ButtonText}>
          Tela Id
        </Text>
      </TouchableOpacity>
    </View>
  )
}



const s = StyleSheet.create({
    Wrapper: {
        flex: 1,
        padding: 20,
        gap: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    Title: {
        fontWeight: '700',
        fontSize: 24,
        color: '#232323223',
    },

    SubTitle: {
        fontWeight: '600',
        fontSize: 16,
        color: '#737373',
    },

    Text: {
        fontWeight: '600',
        fontSize: 16,
        color: '#737373',
        textAlign: 'center',
        marginBottom: 50
    },

    Button: {
        width: '100%',
        height: 55,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AE273',
    },

    ButtonText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#FFF',
    }


})
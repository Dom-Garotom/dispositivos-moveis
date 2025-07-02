import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { mockBooks } from '@/src/db/bookList';
import renderStars from '@/src/utils/renderStars';
import { Ionicons } from '@expo/vector-icons';

export default function BookDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const book = mockBooks.find( item => item.id === id);

  if (!book) return <Text>Livro não encontrado</Text>;

  return (
    <ImageBackground source={{ uri: book.imageUrl }} style={styles.background}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name='arrow-up-sharp' style={{}} size={20} color={'#fff'} />
      </TouchableOpacity>

      <View style={styles.contentWrapper}>

        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>

        <View style={styles.infoRow}>
          <View style={styles.stars}>{renderStars(book.rating)}</View>
          <Text style={styles.infoText}>{book.readingTime} de leitura</Text>
        </View>



        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Consequat risus nulla iaculis ac faucibus lectus cras bibendum
          dignissim. Dolor turpis et euismod lacinia vitae amet quis. Ultrices morbi porttitor tortor lobortis ut
          turpis vestibulum. In etiam odio neque et sed consequat tristique quis. Nunc sit nibh nibh vestibulum
          donec. Est volutpat nibh morbi aliquam gravida potenti.
        </Text>

        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.goButtonText}>Ler livro</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    padding: 20
  },

  contentWrapper: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 20,
    padding: 20,
  },


  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#121212',
  },

  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
  },

  infoText: {
    fontSize: 12,
    color: '#444',
  },

  goButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#25FE82',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 12,
  },

  goButtonText: {
    color: '#fffff7',
    fontWeight: '600',
  },


  description: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
    marginBottom: 10,
  },


  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#105b30',
    zIndex: 10,

    transform: [{ rotate: '-90deg' }]
  },

});

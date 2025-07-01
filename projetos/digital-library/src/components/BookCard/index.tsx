import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const BookCard: React.FC<BookCardProps> = ({ title, author, imageUrl }) => {
  const { push } = useRouter()

  const handleClick = () => {
    push('/book/[title]')
  }

  const percentageWidth = Math.random() * 600 / 3

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handleClick}>

      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.percentageContainer}>
          <View style={[styles.percentage, { width: percentageWidth }]} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    backgroundColor: '#FEFFFE',
    overflow: 'hidden',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 12,
    resizeMode: 'cover',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171b18',
  },

  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },

  percentageContainer: {
    marginTop: 10,
    width: '90%',
    height: 8,
    borderRadius: 6,
    backgroundColor: '#f4f0f0',
  },

  percentage: {
    width: '100%',
    height: 8,
    borderRadius: 6,
    backgroundColor: '#25FE82',
  }
});

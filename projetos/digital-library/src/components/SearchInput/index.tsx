import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#edf2fb" style={styles.icon} />
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="#edf2fb"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
});

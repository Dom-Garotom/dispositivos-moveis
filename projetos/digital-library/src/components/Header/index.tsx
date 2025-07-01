import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchInput } from '../SearchInput';

export const Header = () => {
  return (
    <View style={styles.container}>
        <SearchInput />
        <Ionicons name="notifications-outline" size={24} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'transparent',
  },
});

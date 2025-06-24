import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    display: 'flex',
    height: 90,
    maxWidth: 250,
    width: 100,
    minWidth: 90,
    gap: 16,
    padding: 6,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5F5',
  },

  card_title: {
    width: '100%',
    fontWeight: "400",
    fontSize: 16,
    textAlign: 'center',
  },

  card_text: {
    width: '100%',
    fontWeight: "700",
    fontSize: 18,
    textAlign: 'center',
  }
})
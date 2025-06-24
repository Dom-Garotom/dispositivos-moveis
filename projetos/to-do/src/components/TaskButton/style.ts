import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    button: {
        width: 56,
        height: 56,
        padding: 16,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    },

    button_pending: {
        backgroundColor: '#E88A1A',
    },

    button_exclude: {
        backgroundColor: '#F22424',
    },

    button_completed: {
        backgroundColor: '#0E9577',
    },

    button_create: {
        backgroundColor: '#1E1E1E',
    }
})
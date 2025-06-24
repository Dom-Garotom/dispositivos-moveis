import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    Wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 56,
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: '#304163',
    },

    text: {
        flex: 1,
        textAlign: "left",
        color: '#fff',
        paddingHorizontal: 12,
    },
})
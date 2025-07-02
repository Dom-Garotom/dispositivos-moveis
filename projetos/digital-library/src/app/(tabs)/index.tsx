import { BookCard } from '@/src/components/BookCard';
import BookView from '@/src/components/BookView';
import { Header } from '@/src/components/Header';
import { mockBooks } from '@/src/db/bookList';
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function Books() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(44, 240, 14, 0.541)', 'rgba(16, 200, 93, 0.385)', 'rgba(14, 161, 75, 0.385)', 'rgba(10, 107, 50, 0.892)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />

                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            <Header />

                            <Text style={styles.sectionTitle}>Destaques da semana</Text>


                            <FlatList
                                data={mockBooks}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <BookView
                                        imageUrl={item.imageUrl}
                                    />
                                )}
                                contentContainerStyle={styles.bookViewContent}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                            />

                            <Text style={styles.sectionTitle}>Continue lendo</Text>

                        </>
                    )}

                    data={mockBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookCard
                         id={item.id}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                        />
                    )}

                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gradient: {
        flex: 1,
        overflow: 'hidden',
        paddingHorizontal: 16,
        paddingTop: 32,
    },

    listContent: {
        paddingBottom: 16,
    },

    bookViewContent: {
        padding: 10,
        height: 220,
        flexDirection: 'row',
    },

    sectionTitle: {
        width: '100%',
        fontSize: 18,
        fontWeight: '700',
        color: '#FEFFFE',
        textAlign: 'left',
        marginTop: 16,
    },
});
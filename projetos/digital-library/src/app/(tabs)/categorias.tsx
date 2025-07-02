import { BookCategory } from '@/src/components/BookCategory'
import { Header } from '@/src/components/Header'
import { mockBooks } from '@/src/db/bookList'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native'

export default function Categorias() {
    return (
        <ScrollView style={styles.Wrapper} showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['rgba(44, 240, 14, 0.541)', 'rgba(16, 200, 93, 0.385)', 'rgba(14, 161, 75, 0.385)', 'rgba(10, 107, 50, 0.892)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />

                <Header />

                <Text style={styles.sectionTitle}>Mais Recentes</Text>

                <FlatList
                    data={mockBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookCategory
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                            rating={item.rating}
                            readingTime={item.readingTime}
                        />
                    )}
                    contentContainerStyle={styles.bookCategoryContent}
                    showsHorizontalScrollIndicator={false}
                    maxToRenderPerBatch={2}
                    horizontal
                />

                <Text style={styles.sectionTitle}>Melhores livros avaliados pela crítica</Text>

                <FlatList
                    data={mockBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookCategory
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                            rating={item.rating}
                            readingTime={item.readingTime}
                        />
                    )}
                    contentContainerStyle={styles.bookCategoryContent}
                    showsHorizontalScrollIndicator={false}
                    maxToRenderPerBatch={2}
                    horizontal
                />

                <Text style={styles.sectionTitle}>Melhores romances do século</Text>

                <FlatList
                    data={mockBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookCategory
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                            rating={item.rating}
                            readingTime={item.readingTime}
                        />
                    )}
                    contentContainerStyle={styles.bookCategoryContent}
                    showsHorizontalScrollIndicator={false}
                    maxToRenderPerBatch={2}
                    horizontal
                />


                <Text style={styles.sectionTitle}>Contos de terror</Text>

                <FlatList
                    data={mockBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookCategory
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                            rating={item.rating}
                            readingTime={item.readingTime}
                        />
                    )}
                    contentContainerStyle={styles.bookCategoryContent}
                    showsHorizontalScrollIndicator={false}
                    maxToRenderPerBatch={2}
                    horizontal
                />

            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
    },

    gradient: {
        flex: 1,
        overflow: 'hidden',
        paddingHorizontal: 16,
        paddingVertical: 32,

    },

    sectionTitle: {
        width: '100%',
        fontSize: 18,
        fontWeight: '700',
        color: '#FEFFFE',
        textAlign: 'left',
        marginTop: 16,
        marginBottom: 10,
    },

    bookCategoryContent: {
    },


})
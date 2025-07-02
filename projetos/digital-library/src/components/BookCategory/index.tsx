import renderStars from '@/src/utils/renderStars';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface BookCategoryProps {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
    rating: number;
    readingTime: string;
}

export const BookCategory: React.FC<BookCategoryProps> = ({ id, title, author, imageUrl, rating, readingTime }) => {
    const { push } = useRouter();

    const handleClick = () => {
        push(`/book/${id}` as '/book/[id]')
    }

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handleClick}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>

                <Text style={styles.readingTime}>Reading time : {readingTime}</Text>

                <View style={styles.starContainer}>
                    {renderStars(rating)}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 150,
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 6,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#FEFFFE',
    },

    image: {
        width: 90,
        height: 130,
        borderRadius: 10,
        marginRight: 16,
        resizeMode: 'cover',
    },

    textContainer: {
        flex: 1,
        width: 150,
        alignContent: 'flex-start',
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#171b18',
    },

    author: {
        fontSize: 12,
        fontWeight: '500',
        color: '#acacac',
    },

    starContainer: {
        flexDirection: 'row',
    },

    readingTime: {
        fontSize: 13,
        color: '#aaa2a2',
        fontWeight: '500',
    },
});

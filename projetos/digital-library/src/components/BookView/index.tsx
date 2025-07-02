import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native';

interface BookViewProps {
    imageUrl: string;
}

const BookView: React.FC<BookViewProps> = ({ imageUrl }) => {
    const [url, setUrl] = useState(imageUrl)
    return (<Image
        source={{ uri: url }}
        style={styles.image}
        onError={
            () => setUrl(
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v5Ev0AFGBH6aTGt_NnXT-P8svwXyi8e13A&s'
            )}
    />
    )
}

export default BookView

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 18,
        marginRight: 12,
        resizeMode: 'cover',
    },
})
import { BookCard } from '@/src/components/BookCard';
import { mockBooks } from '@/src/db/bookList';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const Perfil = () => {
    return (
        <SafeAreaView style={styles.container}>

            <LinearGradient
                colors={['rgba(44, 240, 14, 0.541)', 'rgba(16, 200, 93, 0.385)', 'rgba(14, 161, 75, 0.385)', 'rgba(10, 107, 50, 0.892)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[StyleSheet.absoluteFill , styles.gradient]}
            >
                <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />


                <Image
                    source={require('../../assets/person.png')}
                    style={styles.avatar}
                />
                <View style={styles.header}>
                    <Text style={styles.name}>Mano Genos</Text>
                    <Text style={styles.bio}>
                        Desenvolvedor apaixonado por tecnologia, React e café ☕
                    </Text>


                    <View style={styles.statsContainer}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>120</Text>
                            <Text style={styles.statLabel}>Publicações</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>3.5k</Text>
                            <Text style={styles.statLabel}>Seguidores</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>180</Text>
                            <Text style={styles.statLabel}>Seguindo</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Meus livros</Text>

                <View style={styles.bookContainer}>
                    {mockBooks.map((item, index) => (
                        <BookCard
                            key={index + 10}
                            title={item.title}
                            author={item.author}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </View>

            </LinearGradient>
        </SafeAreaView>
    );
};

export default Perfil


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gradient: { 
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        overflow: 'scroll'
    },

    header: {
        position: 'relative',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: '#FEFFFE',
        top: -37
    },

    bookContainer: {
        width: '100%',
        gap: 5,
        paddingVertical: 10
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        position: 'relative',
        zIndex: 2
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },

    bio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 8,
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 16,
    },

    statBox: {
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    statLabel: {
        fontSize: 12,
        color: '#111111',
    },

    sectionTitle: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FEFFFE',
        textAlign: 'left'
    },


    listContent: {
        paddingBottom: 16,
    },


});

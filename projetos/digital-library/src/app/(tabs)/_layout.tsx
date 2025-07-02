import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Livros',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name='categorias'
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bookmarks-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name='perfil'
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

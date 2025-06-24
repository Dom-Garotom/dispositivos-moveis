import React from 'react'
import { Text, View, ViewProps } from 'react-native'
import { s } from './style'

interface InfoCardProps extends ViewProps {
    title: string,
    text: string,
    color: string
}

const InfoCard: React.FC<InfoCardProps> = ({ text, title, color }) => {
    return (
        <View style={s.card}>
            <Text style={s.card_title}>{title}</Text>
            <Text style={[s.card_text, { color: color }]}>{text}</Text>
        </View>
    )
}

export default InfoCard
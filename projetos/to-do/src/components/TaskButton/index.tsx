import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import { s } from './style'

type ButtonType = "completed" | "exclude" | "pending" | 'create'

interface TaskButtonProps {
    type: ButtonType
    onClick: () => void
}

const TaskButton: React.FC<TaskButtonProps> = ({ type, onClick }) => {

    const iconModel = {
        completed: 'check-square-o',
        exclude: 'trash-o',
        pending: 'square-o',
        create : 'plus-square-o'
    }

    const taskButtonVariantStyles = {
        completed: s.button_completed,
        exclude: s.button_exclude,
        pending: s.button_pending,
        create : s.button_create
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[s.button, taskButtonVariantStyles[type]]}
            onPress={onClick}
        >
            <FontAwesome color={'#fff'} name={iconModel[type] as keyof typeof FontAwesome.glyphMap} size={24} />
        </TouchableOpacity>
    )
}

export default TaskButton
import React, { useContext } from 'react'
import TaskButton from '../TaskButton'
import { Text, View } from 'react-native'
import { s } from './style'
import { TaskItemType } from '@/src/types/taskItemTypes'
import { TaskListContext } from '@/src/context/models/taskListContext'



const TaskItem: React.FC<TaskItemType> = ({ id, taskName, status }) => {
    const { removeTask, changeStatusTask } = useContext(TaskListContext)

    const changeTaskState = () => {
        if (status === 'completed') {
            changeStatusTask(id, status)
            return
        }

        if (status === 'pending') {
            changeStatusTask(id, status)
            return
        }

        return
    }

    return (
        <View style={s.Wrapper}>
            <TaskButton type={status} onClick={() => changeTaskState()} />
            <Text style={s.text}>{taskName}</Text>
            <TaskButton type='exclude' onClick={() => removeTask(id)} />
        </View>
    )
}

export default TaskItem


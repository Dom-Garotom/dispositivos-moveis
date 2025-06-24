import React, { ReactNode, useState } from 'react'
import { TaskItemType, TaskStatus } from '@/src/types/taskItemTypes'
import { TaskListContext } from '../models/taskListContext'
import * as Crypto from "expo-crypto"

type TaskListProviderProps = {
    children: ReactNode
}

const TaskListProvider: React.FC<TaskListProviderProps> = ({ children }) => {
    const [pendingTask, setPendingTaskState] = useState<TaskItemType[]>([])
    const [completedTask, setCompletedTask] = useState<TaskItemType[]>([])

    const addTask = (taskName: string) => {
        const taskItem: TaskItemType = {
            id: Crypto.randomUUID(),
            status: "pending",
            taskName
        }

        const updateArray = [taskItem, ...pendingTask]
        setPendingTaskState(updateArray)
    }

    const removeTask = (id: string, status?: TaskStatus) => {
        if (status === 'pending') {
            setPendingTaskState(prev => prev.filter(item => item.id !== id))
            return
        }

        if (status === 'completed') {
            setCompletedTask(prev => prev.filter(item => item.id !== id))
            return
        }

        setCompletedTask(prev => prev.filter(item => item.id !== id))
        setPendingTaskState(prev => prev.filter(item => item.id !== id))
        return
    }


    const changeStatusTask = (id: string, status: TaskStatus) => {

        if (status === 'pending') {
            const completedTask = pendingTask.find(item => item.id === id)

            if (!completedTask) return

            const newCompletedTask: TaskItemType = {
                ...completedTask,
                status: 'completed',
            }

            removeTask(id, 'pending')
            setCompletedTask(prev => [newCompletedTask, ...prev])

            return
        }

        if (status === 'completed') {

            const pendingTask = completedTask.find(item => item.id === id)

            if (!pendingTask) return

            const newPendingTask: TaskItemType = {
                ...pendingTask,
                status: 'pending',
            }

            removeTask(id, 'completed')
            setPendingTaskState(prev => [newPendingTask, ...prev])
        }

        return
    }


    return (
        <TaskListContext.Provider value={{
            list: [...completedTask, ...pendingTask],
            completedTask,
            pendingTask,
            addTask,
            removeTask,
            changeStatusTask,
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListProvider


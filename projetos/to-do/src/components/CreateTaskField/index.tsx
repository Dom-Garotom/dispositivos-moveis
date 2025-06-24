import React, { useContext, useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import TaskButton from '../TaskButton'
import { TaskListContext } from '@/src/context/models/taskListContext'


const CreateTaskField: React.FC = () => {
  const { addTask } = useContext(TaskListContext)
  const [taskName, setTaskName] = useState<string>('')

  const createTask = () => {
    if (taskName === '') {
      Alert.alert('Campo de escrita vázio', 'Pro favor escreva um nome descritivo para a sua task.', [{ text: 'ok' }])
      return
    }

    addTask(taskName)
    setTaskName('')
  }

  return (
    <View style={s.container}>
      <TextInput style={s.input} placeholder='Gostaria de criar uma tarefa?' placeholderTextColor={'#fff'} value={taskName} onChangeText={text => setTaskName(text)} />
      <TaskButton type="create" onClick={createTask} />
    </View>
  )

}

export default CreateTaskField

const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#252627',
    borderRadius: 4,
    marginVertical: 20,
  },

  input: {
    padding: 8,
    color: '#fff',
    borderWidth: 0,
  },
})
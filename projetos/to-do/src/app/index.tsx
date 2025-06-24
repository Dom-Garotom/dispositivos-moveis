import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TaskItem from "../components/TaskItem";
import { useContext } from "react";
import { TaskListContext } from "../context/models/taskListContext";
import InfoCard from "../components/InfoCard";
import CreateTaskField from "../components/CreateTaskField";


export default function Index() {
  const { list, completedTask, pendingTask } = useContext(TaskListContext)

  return (
    <SafeAreaView
      style={s.main}
    >

    <CreateTaskField/>

      <View style={s.info_cards}>
        <InfoCard title="Task pendentes" color="#16f0f0" text={pendingTask.length.toString()} />
        <InfoCard title="Task Concluidas" color="#ff19ff" text={completedTask.length.toString()} />
        <InfoCard title="Task no total" color="#6600ff99" text={list.length.toString()} />
      </View>


      <Text style={s.section_title}>Em aberto:</Text>

      <FlatList
        data={pendingTask}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem id={item.id} status={item.status} taskName={item.taskName} />
        )}
        style={{ width: '100%', minHeight: 125 }}
        contentContainerStyle={{ gap: 16 }}
      />

      <Text style={s.section_title}>Completas : </Text>

      <FlatList
        data={completedTask}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem id={item.id} status={item.status} taskName={item.taskName} />
        )}
        style={{ width: '100%', minHeight: 125 }}
        contentContainerStyle={{ gap: 16 }}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#28385E',
  },

  section_title: {
    fontWeight: "500",
    fontSize: 16,
    color: '#f5f5f5',
    marginVertical: 15,
  },

  info_cards: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "center",
    gap: 10,
  }


})
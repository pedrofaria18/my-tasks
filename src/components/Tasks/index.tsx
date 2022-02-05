import React from "react";

import { StyleSheet, FlatList, Text, View } from "react-native";

import { useCategories } from "../../context/useCategories";
import { useTasks } from "../../context/useTasks";

import { Task } from "./Task";

import { theme } from "../../styles/global";

export function Tasks() {
  const { tasks } = useTasks();
  const { categorySelected } = useCategories();

  const tasksFiltered =
    categorySelected === "Todos"
      ? tasks.filter((task) => task.category !== "Concluídos")
      : tasks.filter((task) => task.category === categorySelected);

  if (tasksFiltered.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nenhuma tarefa encontrada</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasksFiltered}
      renderItem={({ item }) => <Task {...item} />}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.primary,
    marginTop: 20,
    textAlign: "center",
  },
});

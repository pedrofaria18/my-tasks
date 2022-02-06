import React from "react";

import { View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Categories } from "../components/Categories";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks/index";

import { theme } from "../styles/global";

export function Home() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Minhas tarefas" />
      <Categories />
      <Tasks />
      <View style={styles.buttonContainer}>
        <Button
          text="+   Criar nova tarefa"
          onPress={() => navigate("CreateTask")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 25,
  },
});

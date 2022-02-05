import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { theme } from "../styles/global";

interface HeaderProps {
  title: string;
  navigation?: any;
}

export function Header({ title, navigation }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {title === "Criar tarefa" && (
        <TouchableOpacity onPress={() => navigation.navigate("Minhas Tarefas")}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 36,
    lineHeight: 54,
    color: theme.colors.secondary100,
  },
  buttonText: {
    fontFamily: theme.fonts.body,
    fontSize: 24,
    color: theme.colors.secondary100,
  },
});
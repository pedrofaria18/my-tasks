import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useTasks } from "../../context/useTasks";

import { theme } from "../../styles/global";

interface CategoryProps {
  isPresentInForm?: boolean;
  name: string;
  onPress: (name: string) => void;
  selected: boolean;
}

export function Category({
  name,
  onPress,
  selected,
  isPresentInForm,
}: CategoryProps) {
  const { tasks } = useTasks();

  const qtdTasks =
    name === "Todos"
      ? tasks.filter((task) => task.category !== "Concluídos").length
      : tasks.filter((task) => task.category === name).length;

  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View
        style={
          selected
            ? isPresentInForm
              ? [styles.container, { marginBottom: 10 }]
              : styles.container
            : [
                styles.container,
                {
                  backgroundColor: theme.colors.white,
                  borderWidth: 1,
                  borderColor: theme.colors.primary,
                  marginBottom: isPresentInForm ? 10 : 0,
                },
              ]
        }
      >
        <Text
          style={
            selected
              ? isPresentInForm
                ? styles.nameForm
                : styles.name
              : isPresentInForm
              ? [styles.nameForm, { color: theme.colors.primary }]
              : [styles.name, { color: theme.colors.primary }]
          }
        >
          {name}
        </Text>
        {!isPresentInForm && (
          <Text
            style={
              selected
                ? [styles.name, styles.qtdTasks]
                : [
                    styles.name,
                    styles.qtdTasks,
                    { color: theme.colors.primary },
                  ]
            }
          >
            ({qtdTasks})
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 29,
    marginRight: 9,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    flexDirection: "row",

    backgroundColor: theme.colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.title,
    marginRight: 8,
  },
  nameForm: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.title,
  },
  qtdTasks: {
    fontSize: 12,
    fontFamily: theme.fonts.body,
    marginRight: 0,
  },
});

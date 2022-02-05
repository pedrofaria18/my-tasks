import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import DotsSVG from "../../assets/DotsSvg";

import { Task as TaskProps, useTasks } from "../../context/useTasks";

import { LeftActionTask } from "./LeftActionTask";
import { RightActionTask } from "./RightActionTask";

import { theme } from "../../styles/global";

export function Task(task: TaskProps) {
  const { id, title, date, hour, category }: TaskProps = task;

  const { handleDeleteTask, handleFinishedTask } = useTasks();

  return (
    <Swipeable
      renderRightActions={() => <RightActionTask />}
      renderLeftActions={() =>
        category === "Concluídos" ? null : <LeftActionTask />
      }
      onSwipeableLeftOpen={() => handleFinishedTask(task)}
      onSwipeableRightOpen={() => handleDeleteTask(id)}
    >
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.date}>
              <Text style={styles.textInfo}>{date}</Text>
            </View>
            <View style={styles.hour}>
              <Text style={styles.textInfo}>{hour}</Text>
            </View>
          </View>

          <View style={styles.nav}>
            <DotsSVG />
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 120,
    backgroundColor: theme.colors.secondary10,
    borderRadius: 10,
    marginBottom: 32,
  },
  line: {
    borderLeftWidth: 10,
    borderLeftColor: theme.colors.primary,
    marginRight: 32,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
  },
  nav: {
    marginLeft: "auto",
    paddingRight: 32,
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 18,
    lineHeight: 27,
    color: theme.colors.secondary100,
  },
  date: {
    marginTop: 8,
  },
  hour: {
    marginTop: 11,
  },
  textInfo: {
    fontFamily: theme.fonts.body,
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.secondary50,
  },
});

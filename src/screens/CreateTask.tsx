import React from "react";

import { View, StyleSheet } from "react-native";

import { Header } from "../components/Header";
import { Form } from "../components/Form";

import { theme } from "../styles/global";

export function CreateTask({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Criar tarefa" navigation={navigation} />
      <Form navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 50,
  },
});

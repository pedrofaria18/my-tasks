import React from "react";

import { View, Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../../styles/global";

interface HeaderModalProps {
  title: string;
  setIsOpen: () => void;
}

export function HeaderModal({ title, setIsOpen }: HeaderModalProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.button} onPress={() => setIsOpen()}>
        <Text style={styles.textButton}>X</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.body,
    color: theme.colors.secondary100,
  },
  button: {
    width: 30,
    padding: 10,
    elevation: 2,
    color: theme.colors.primary,
    marginLeft: "auto",
  },
  textButton: {
    color: theme.colors.secondary100,
    fontFamily: theme.fonts.body,
    fontSize: 20,
  },
});

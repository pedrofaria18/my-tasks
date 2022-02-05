import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { theme } from "../../styles/global";

export function LeftActionTask() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>feito</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    backgroundColor: theme.colors.green,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.green,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: 18,
    lineHeight: 27,
    color: theme.colors.white,
    marginRight: "auto",
    transform: [{ rotate: "90deg" }],
  },
});

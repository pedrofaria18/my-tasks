import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { theme } from "../../styles/global";

export function RightActionTask() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>excluir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    backgroundColor: theme.colors.red,
    borderRightWidth: 1,
    borderRightColor: theme.colors.red,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },

  text: {
    fontFamily: theme.fonts.body,
    fontSize: 18,
    lineHeight: 27,
    color: theme.colors.white,
    marginLeft: "auto",
    transform: [{ rotate: "-90deg" }],
  },
});

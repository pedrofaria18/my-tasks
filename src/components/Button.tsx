import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { theme } from "../styles/global";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export function Button({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[
          styles.button,
          {
            marginTop: text === "Criar tarefa" ? 60 : 0,
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    width: "100%",
    height: 59,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fonts.title,
  },
});

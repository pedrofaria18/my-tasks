import { TextInput, StyleSheet } from "react-native";
import { theme } from "../../styles/global";

interface InputProps {
  textarea?: boolean;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

export function Input({
  textarea,
  placeholder,
  onChangeText,
  value,
}: InputProps) {
  return (
    <TextInput
      style={[
        styles.input,
        {
          height: textarea ? 100 : 40,
          marginTop: textarea ? 40 : 0,
          paddingTop: textarea ? 10 : 0,
        },
      ]}
      placeholder={placeholder}
      multiline={textarea}
      onChangeText={(value) => onChangeText(value)}
      value={value}
      placeholderTextColor={theme.colors.textInput}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: theme.colors.input,
    fontFamily: theme.fonts.body,
    paddingHorizontal: 32,
    color: theme.colors.textInput,
    borderRadius: 10,
  },
});

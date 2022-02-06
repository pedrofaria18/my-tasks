import { Text, View, StyleSheet } from "react-native";

import { theme } from "../../styles/global";

import { Categories } from "../Categories";

interface CategoriesFormProps {
  openModalNewCategory: () => void;
}

export function CategoriesForm({ openModalNewCategory }: CategoriesFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria</Text>

      <Categories
        isPresentInForm
        openModalNewCategory={openModalNewCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.secondary50,
    marginBottom: 18,
  },
});

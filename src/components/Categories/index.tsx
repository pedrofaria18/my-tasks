import React from "react";

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import PlusSVG from "../../assets/PlusSVG";

import { useCategories } from "../../context/useCategories";
import { theme } from "../../styles/global";

import { Category } from "./Category";

interface CategoriesProps {
  isPresentInForm?: boolean;
  openModalNewCategory?: () => void;
}

export function Categories({
  isPresentInForm = false,
  openModalNewCategory,
}: CategoriesProps) {
  const {
    categories,
    categorySelected,
    handleCategorySelected,
    categoryFormSelected,
    handleCategoryFormSelected,
  } = useCategories();

  const categoriesForm = categories.filter(
    (category: any) => category !== "Concluídos"
  );

  if (isPresentInForm) {
    return (
      <View style={styles.containerForm}>
        {categoriesForm.map((category) => (
          <Category
            key={category}
            isPresentInForm={true}
            name={category}
            onPress={(name) => handleCategoryFormSelected(name)}
            selected={categoryFormSelected === category}
          />
        ))}
        <TouchableOpacity onPress={openModalNewCategory}>
          <View style={styles.button}>
            <PlusSVG />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 25 }}
    >
      {categories.map((category) => (
        <Category
          key={category}
          name={category}
          onPress={(name) => handleCategorySelected(name)}
          selected={categorySelected === category}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    minHeight: 74,
    maxHeight: 74,
  },
  containerForm: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    height: 29,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

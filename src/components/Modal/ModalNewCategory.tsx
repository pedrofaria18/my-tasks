import React, { useCallback, useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

import { useCategories } from "../../context/useCategories";

import { Modal } from ".";
import { Input } from "../Form/Input";

import { theme } from "../../styles/global";

interface ModalNewCategoryProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export function ModalNewCategory({ isOpen, setIsOpen }: ModalNewCategoryProps) {
  const [category, setCategory] = useState<string>("");

  const { handleAddCategory } = useCategories();

  const handleSubmit = () => {
    if (category.trim() === "") {
      return Alert.alert("O nome da categoria é obrigatório");
    }
    handleAddCategory(category);
    setCategory("");
    setIsOpen();
  };

  const handleChangeCategory = useCallback((category: string) => {
    setCategory(category);
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Criar categoria">
      <View style={styles.content}>
        <Input
          placeholder="Nome da categoria"
          onChangeText={handleChangeCategory}
          value={category}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    width: "100%",
    height: 36,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.body,
  },
});

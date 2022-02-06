import React, { useState } from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";

import { useCategories } from "../../context/useCategories";
import { TaskForm, useTasks } from "../../context/useTasks";

import { formatDate, formatHour } from "../../utils/formatDateTime";

import { CategoriesForm } from "./CategoriesForm";
import { Input } from "./Input";
import { Occurency } from "./Occurency";
import { Button } from "../Button";

import { ModalNewCategory } from "../Modal/ModalNewCategory";
import { ModalDateTimePicker } from "../Modal/ModalDateTimePicker";
import { useNavigation } from "@react-navigation/native";

export function Form() {
  const { navigate } = useNavigation();

  const [isOpenModalNewCategory, setIsOpenModalNewCategory] = useState(false);

  const [isOpenModalDateTime, setIsOpenModalDateTime] = useState(false);
  const [mode, setMode] = useState("date");

  const { categoryFormSelected } = useCategories();

  const { handleAddTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<Date>(new Date());

  const handleOpenModalDateTime = () => {
    setIsOpenModalDateTime(!isOpenModalDateTime);
  };

  const handleOpenModalNewCategory = () => {
    setIsOpenModalNewCategory(!isOpenModalNewCategory);
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleSubmit = async () => {
    if (title.trim() === "") {
      return Alert.alert("Título é obrigatório");
    } else if (description.trim() === "") {
      return Alert.alert("Descrição é obrigatória");
    }

    const task: TaskForm = {
      title,
      description,
      date: formatDate(date),
      hour: formatHour(hour),
      category: categoryFormSelected,
    };

    await handleAddTask(task);
    navigate("Home");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Input
        placeholder="Título da tarefa"
        onChangeText={handleTitleChange}
        value={title}
      />
      <CategoriesForm openModalNewCategory={handleOpenModalNewCategory} />
      <Occurency
        handleOpenModalDateTime={handleOpenModalDateTime}
        setMode={(value: string) => setMode(value)}
        date={date}
        hour={hour}
      />
      <Input
        textarea
        placeholder="Descrição da tarefa"
        onChangeText={handleDescriptionChange}
        value={description}
      />
      <Button text="Criar tarefa" onPress={handleSubmit} />

      <ModalNewCategory
        isOpen={isOpenModalNewCategory}
        setIsOpen={handleOpenModalNewCategory}
      />

      <ModalDateTimePicker
        isOpen={isOpenModalDateTime}
        setIsOpen={handleOpenModalDateTime}
        mode={mode}
        setDate={(value: Date) => setDate(value)}
        setHour={(value: Date) => setHour(value)}
        date={date}
        hour={hour}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
});

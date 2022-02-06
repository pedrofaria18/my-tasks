import React, { useState } from "react";

import { StyleSheet, ScrollView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useCategories } from "../../context/useCategories";
import { TaskForm, useTasks } from "../../context/useTasks";

import { formatDate, formatHour } from "../../utils/formatDateTime";

import { CategoriesForm } from "./CategoriesForm";
import { Input } from "./Input";
import { Occurency } from "./Occurency";
import { Button } from "../Button";
import { ModalNewCategory } from "../Modal/ModalNewCategory";
import { ModalDateTimePicker } from "../Modal/ModalDateTimePicker";

export function Form() {
  const { navigate } = useNavigation();

  const { categoryFormSelected } = useCategories();
  const { handleAddTask } = useTasks();

  const [isOpenModalNewCategory, setIsOpenModalNewCategory] =
    useState<boolean>(false);
  const [isOpenModalDateTime, setIsOpenModalDateTime] =
    useState<boolean>(false);
  const [mode, setMode] = useState<string>("date");

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<Date>(new Date());

  const handleOpenModalDateTime = () => {
    setIsOpenModalDateTime(!isOpenModalDateTime);
  };

  const handleOpenModalNewCategory = () => {
    setIsOpenModalNewCategory(!isOpenModalNewCategory);
  };

  const handleTitleChange = (title: string) => {
    setTitle(title);
  };

  const handleDescriptionChange = (description: string) => {
    setDescription(description);
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
        setMode={setMode}
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
        setDate={setDate}
        setHour={setHour}
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

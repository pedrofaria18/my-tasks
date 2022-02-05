import React, { useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Modal } from ".";

import { theme } from "../../styles/global";

interface ModalDateTimePickerProps {
  isOpen: boolean;
  setIsOpen: () => void;
  mode: string;
  date: Date;
  hour: Date;
  setDate: (date: Date) => void;
  setHour: (hour: Date) => void;
}

export function ModalDateTimePicker({
  isOpen,
  setIsOpen,
  mode,
  setDate,
  setHour,
  date,
  hour,
}: ModalDateTimePickerProps) {
  const handleChange = (event: any, selectedDate: Date | undefined) => {
    mode === "date"
      ? setDate(selectedDate || date)
      : setHour(selectedDate || hour);
  };

  const handleSubmit = () => {
    setIsOpen();
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={mode === "date" ? "Selecione uma data" : "Selecione uma hora"}
    >
      <View style={styles.content}>
        <DateTimePicker
          value={mode === "date" ? date : hour}
          mode={mode === "date" ? "date" : "time"}
          is24Hour={true}
          display="default"
          onChange={handleChange}
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Salvar {mode === "date" ? "data" : "hora"}
            </Text>
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
  picker: {
    width: "100%",
    marginTop: 20,
  },
});

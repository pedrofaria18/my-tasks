import React from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { formatDate, formatHour } from "../../utils/formatDateTime";

import CalendarSVG from "../../assets/CalendarSVG";
import ClockSVG from "../../assets/ClockSVG";

import { theme } from "../../styles/global";

interface OccurencyProps {
  handleOpenModalDateTime: () => void;
  setMode: (value: string) => void;
  date: Date;
  hour: Date;
}

export function Occurency({
  handleOpenModalDateTime,
  setMode,
  date,
  hour,
}: OccurencyProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleOpenModalDateTime();
            setMode("date");
          }}
        >
          <View style={styles.button}>
            <CalendarSVG />
            <Text style={styles.title}>{formatDate(date)}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleOpenModalDateTime();
            setMode("time");
          }}
        >
          <View style={styles.button}>
            <ClockSVG />
            <Text style={styles.title}>{formatHour(hour)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: theme.colors.select,
    borderRadius: 8,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    marginRight: 13,
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 18,
    color: theme.colors.secondary50,
  },
});

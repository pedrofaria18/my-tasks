import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateTask } from "../screens/CreateTask";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Minhas Tarefas"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Minhas Tarefas" component={Home} />
        <Screen name="Criar Tarefa" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  );
}

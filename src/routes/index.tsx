import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateTask } from "../screens/CreateTask";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CreateTask: undefined;
    }
  }
}

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Minhas Tarefas"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="CreateTask" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  );
}

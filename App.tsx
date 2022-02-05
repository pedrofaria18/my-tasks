import { StatusBar } from "expo-status-bar";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { TasksProvider } from "./src/context/useTasks";
import { CategoriesProvider } from "./src/context/useCategories";

import { AppRoutes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <TasksProvider>
        <CategoriesProvider>
          <AppRoutes />
        </CategoriesProvider>
      </TasksProvider>
    </>
  );
}

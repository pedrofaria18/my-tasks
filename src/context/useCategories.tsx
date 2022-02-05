import { createContext, useContext, useEffect, useState } from "react";

import { Children } from "./types";

import { categoriesMock } from "../mocks/categories";

interface CategoriesContextData {
  categories: string[];
  categorySelected: string;
  categoryFormSelected: string;
  handleCategorySelected: (category: string) => void;
  handleCategoryFormSelected: (category: string) => void;
  handleAddCategory: (category: string) => void;
}

const CategoriesContext = createContext({} as CategoriesContextData);

export function CategoriesProvider({ children }: Children) {
  const [categories, setCategories] = useState<string[]>([]);

  const [categorySelected, setCategorySelected] = useState<string>("Todos");
  const [categoryFormSelected, setCategoryFormSelected] =
    useState<string>("Todos");

  const handleCategorySelected = (category: string) => {
    setCategorySelected(category);
  };

  const handleCategoryFormSelected = (category: string) => {
    setCategoryFormSelected(category);
  };

  const handleAddCategory = (value: string) => {
    const categoriesMinusConclued = categories.filter(
      (category) => category !== "Concluídos"
    );

    categoriesMinusConclued.find((category) => category === value)
      ? setCategories([...categories])
      : (setCategories([...categoriesMinusConclued, value, "Concluídos"]),
        setCategoryFormSelected(value));
  };

  useEffect(() => {
    setCategories(categoriesMock);
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        categorySelected,
        categoryFormSelected,
        handleCategorySelected,
        handleCategoryFormSelected,
        handleAddCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);

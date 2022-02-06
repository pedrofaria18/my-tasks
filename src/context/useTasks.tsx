import { createContext, useContext, useEffect, useState } from "react";

import { Children } from "./types";

import { tasksMock } from "../mocks/tasks";

interface TasksContextData {
  tasks: Task[];
  handleAddTask: (task: TaskForm) => void;
  handleDeleteTask: (taskId: number) => void;
  handleFinishedTask: (task: Task) => void;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  hour: string;
  category: string;
}

export type TaskForm = Omit<Task, "id">;

const TasksContext = createContext({} as TasksContextData);

export function TasksProvider({ children }: Children) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: TaskForm) => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...task,
    };

    setTasks((tasks) => [newTask, ...tasks]);
  };

  const handleDeleteTask = (taskDeletedId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskDeletedId));
  };

  const handleFinishedTask = (taskFinished: Task) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskFinished.id ? { ...task, category: "Concluídos" } : task
      )
    );
  };

  useEffect(() => {
    setTasks(tasksMock);
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, handleAddTask, handleDeleteTask, handleFinishedTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);

import axios from "axios";
import type { Task } from "../types/task";
import { getTasksFromStorage, saveTasksToStorage } from "../utils/localStorage";

interface JSONPlaceholderTodo {
  id: number;
  title: string;
  completed: boolean;
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const mapTodoToTask = (todo: JSONPlaceholderTodo): Task => {
  return {
    id: todo.id,
    title: todo.title,
    description: null,
    createdAt: new Date(),
    status: todo.completed ? 2 : 0,
  };
};

export const fetchTasks = async () => {
  const savedTasks = getTasksFromStorage();
  
  if (savedTasks && savedTasks.length > 0) {
    return savedTasks;
  }
  
  const response = await axios.get(`${API_BASE_URL}/todos`);
  const tasks = response.data.map(mapTodoToTask);
  saveTasksToStorage(tasks);
  return tasks;
};

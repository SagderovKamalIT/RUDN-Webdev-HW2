import axios from "axios";
import type { Task, TaskStatus } from "../types/task";

interface JSONPlaceholderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const mapTodoToTask = (todo: JSONPlaceholderTodo): Task => {
  const status: TaskStatus = todo.completed ? 2 : 0;
  
  return {
    id: todo.id,
    title: todo.title,
    description: null,
    createdAt: new Date(),
    status,
  };
};

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get<JSONPlaceholderTodo[]>(
    `${API_BASE_URL}/todos`
  );
  return response.data.map(mapTodoToTask);
};

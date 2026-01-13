import type { Task } from "../types/task";

const STORAGE_KEY = "kanban-tasks";

export const getTasksFromStorage = (): Task[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const tasks = JSON.parse(data);
    return tasks.map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt),
    }));
  } catch {
    return null;
  }
};

export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    console.error("Не удалось сохранить задачи в localStorage");
  }
};

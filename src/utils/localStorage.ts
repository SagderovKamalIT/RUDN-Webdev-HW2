import type { Task } from "../types/task";

const STORAGE_KEY = "kanban-tasks";
const CACHE_VERSION_KEY = "kanban-cache-version";
const CURRENT_CACHE_VERSION = 2;

const clearOldCache = (): void => {
  const storedVersion = localStorage.getItem(CACHE_VERSION_KEY);
  const versionNumber = storedVersion ? parseInt(storedVersion, 10) : 0;
  
  if (versionNumber !== CURRENT_CACHE_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(CACHE_VERSION_KEY, String(CURRENT_CACHE_VERSION));
  }
};

clearOldCache();

export const getTasksFromStorage = (): Task[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const tasks = JSON.parse(data) as Task[];
    return tasks.map((task: Task) => ({
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

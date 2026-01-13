import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../services/taskService";
import type { Task } from "../types/task";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

export const useTask = (id: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["tasks", id],
    queryFn: async () => {
      const cachedTasks = queryClient.getQueryData(["tasks"]);
      
      if (cachedTasks) {
        const tasks = cachedTasks as Task[];
        const foundTask = tasks.find((task: Task) => task.id === id);
        return foundTask;
      }
      
      const allTasks = await fetchTasks();
      const foundTask = allTasks.find((task: Task) => task.id === id);
      return foundTask;
    },
    enabled: id > 0,
  });
};

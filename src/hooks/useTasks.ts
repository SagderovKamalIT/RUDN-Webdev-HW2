import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../services/taskService";
import type { Task } from "../types/task";

export const useTasks = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

export const useTask = (id: number) => {
  const queryClient = useQueryClient();

  return useQuery<Task | undefined>({
    queryKey: ["tasks", id],
    queryFn: async () => {
      const tasks = queryClient.getQueryData<Task[]>(["tasks"]);
      if (tasks) {
        return tasks.find((task) => task.id === id);
      }
      const allTasks = await fetchTasks();
      return allTasks.find((task) => task.id === id);
    },
    enabled: !!id,
  });
};

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../services/taskService";
import type { Task } from "../types/task";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

const getTaskById = async (
  id: number,
  queryClient: ReturnType<typeof useQueryClient>
): Promise<Task | undefined> => {
  const cachedTasks = queryClient.getQueryData<Task[]>(["tasks"]);

  if (cachedTasks) {
    return cachedTasks.find((task) => task.id === id);
  }

  const tasksFromApi = await fetchTasks();
  return tasksFromApi.find((task) => task.id === id);
};

export const useTask = (id: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["tasks", id],
    queryFn: () => getTaskById(id, queryClient),
    enabled: Boolean(id),
  });
};

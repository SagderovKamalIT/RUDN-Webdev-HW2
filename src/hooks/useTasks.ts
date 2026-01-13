import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../services/taskService";
import type { Task, TaskStatus } from "../types/task";

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

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { id: number; status: TaskStatus }) => payload,
    onSuccess: ({ id, status }) => {
      queryClient.setQueryData(["tasks"], (cached: unknown) => {
        if (!cached) return cached;
        const tasks = cached as Task[];
        return tasks.map((task) =>
          task.id === id ? { ...task, status } : task
        );
      });

      queryClient.setQueryData(["tasks", id], (cached: unknown) => {
        const task = cached as Task | undefined;
        if (!task) return task;
        return { ...task, status };
      });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => id,
    onSuccess: (id) => {
      queryClient.setQueryData(["tasks"], (cached: unknown) => {
        if (!cached) return cached;
        const tasks = cached as Task[];
        return tasks.filter((task) => task.id !== id);
      });

      queryClient.removeQueries({ queryKey: ["tasks", id] });
    },
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { title: string; description: string | null }) => {
      const cachedTasks = queryClient.getQueryData(["tasks"]);
      let maxId = 0;
      
      if (cachedTasks) {
        const tasks = cachedTasks as Task[];
        tasks.forEach((task) => {
          if (task.id > maxId) {
            maxId = task.id;
          }
        });
      } else {
        const allTasks = await fetchTasks();
        allTasks.forEach((task: Task) => {
          if (task.id > maxId) {
            maxId = task.id;
          }
        });
      }

      const newTask: Task = {
        id: maxId + 1,
        title: payload.title,
        description: payload.description || null,
        createdAt: new Date(),
        status: 0,
      };

      return newTask;
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData(["tasks"], (cached: unknown) => {
        if (!cached) {
          return [newTask];
        }
        const tasks = cached as Task[];
        return [...tasks, newTask];
      });
    },
  });
};

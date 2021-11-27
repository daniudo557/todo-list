import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import {
  createTodo as createTodoService,
  deleteTodo as deleteTodoService,
  fetchTodo as fetchTodoService,
  findTodo as findTodoService,
  updateTodo as updateTodoService,
} from "src/services/todoService";

export const useTodo = () => {
  const queryClient = useQueryClient();
  const params: { id?: string } = useParams();

  const { data: todoList } = useQuery("todoList", fetchTodoService, {
    enabled: !params.id,
  });

  const { data: todo } = useQuery(
    "todo",
    () => findTodoService(params.id as string),
    {
      enabled: !!params.id,
    }
  );

  const { mutate: createTodo } = useMutation(createTodoService, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
      queryClient.invalidateQueries("todo");
    },
  });

  const { mutate: removeTodo } = useMutation(deleteTodoService, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
      queryClient.invalidateQueries("todo");
    },
  });

  const { mutate: updateTodo } = useMutation(updateTodoService, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
      queryClient.invalidateQueries("todo");
    },
  });

  return { todo, todoList, createTodo, removeTodo, updateTodo };
};

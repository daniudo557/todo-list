import { Endpoints } from "src/configs/endpoints";
import { Todo } from "src/domains/Todo";
import RequestService from "./requestService";

export const fetchTodo = (): Promise<Todo[]> => {
  return RequestService.get<Todo[]>(Endpoints.TODO).then((respnse) => {
    return respnse.data;
  });
};

export const findTodo = (todoId: string): Promise<Todo> => {
  const url = Endpoints.FIND_TODO.replace("{id}", todoId);

  return RequestService.get<Todo>(url).then((respnse) => {
    return respnse.data;
  });
};

export const createTodo = (todo: Partial<Todo>): Promise<Todo> => {
  return RequestService.post<Todo>(Endpoints.CREATE_TODO, todo).then(
    (respnse) => respnse.data
  );
};

export const updateTodo = (todo: Todo): Promise<Todo> => {
  const todoId = todo.id.toString();
  const url = Endpoints.DELETE_TODO.replace("{id}", todoId);

  return RequestService.put<Todo>(url, todo).then((respnse) => respnse.data);
};

export const deleteTodo = (todo: Todo): Promise<Todo> => {
  const todoId = todo.id.toString();
  const url = Endpoints.DELETE_TODO.replace("{id}", todoId);

  return RequestService.delete<Todo>(url).then((respnse) => respnse.data);
};

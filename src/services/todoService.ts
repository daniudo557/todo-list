import { Endpoints } from "src/configs/endpoints";
import { Todo } from "src/domains/Todo";
import RequestService, { Response } from "./requestService";

export const fetchTodo = (): Promise<Response<Todo[]>> => {
  return RequestService.get<Todo[]>(Endpoints.TODO).then((respnse) => respnse);
};

export const createTodo = (todo: Partial<Todo>): Promise<Response<Todo>> => {
  return RequestService.post<Todo>(Endpoints.CREATE_TODO, todo).then(
    (respnse) => respnse
  );
};

export const updateTodo = (): Promise<Response<Todo>> => {
  return RequestService.put<Todo>(Endpoints.UPDATE_TODO).then(
    (respnse) => respnse
  );
};

export const deleteTodo = (): Promise<Response<string>> => {
  return RequestService.delete<string>(Endpoints.DELETE_TODO).then(
    (respnse) => respnse
  );
};

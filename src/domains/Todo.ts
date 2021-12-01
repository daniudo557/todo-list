export enum TodoStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

export interface Todo {
  createdAt: Date;
  description: string;
  id: number;
  status: TodoStatus;
  title: string;
  updatedAt: Date;
}

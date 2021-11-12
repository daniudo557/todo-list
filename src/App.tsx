import { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import { Todo } from "./domains/Todo";
import "./index.css";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  console.log(todoList);

  const handleRemove = (selectedTodo: Todo) => {
    const newTodoList = todoList.filter((todo) => todo.id !== selectedTodo.id);

    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput
        submitTodo={(newTodo) => {
          setTodoList((oldState) => [...oldState, newTodo]);
        }}
      />
      <TodoCard todoList={todoList} onRemove={handleRemove} />
    </>
  );
};

export default App;

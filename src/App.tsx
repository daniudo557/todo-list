import { useState } from "react";
import TodoCardSection from "./components/TodoCardSection";
import TodoInput from "./components/TodoInput";
import { Todo } from "./domains/Todo";
import "./index.css";
import Wrapper from "./components/Wrapper";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  console.log(todoList);

  const handleRemove = (selectedTodo: Todo) => {
    const newTodoList = todoList.filter((todo) => todo.id !== selectedTodo.id);

    setTodoList(newTodoList);
  };

  return (
    <Wrapper>
      <TodoInput
        submitTodo={(newTodo) => {
          setTodoList((oldState) => [...oldState, newTodo]);
        }}
      />
      <TodoCardSection todoList={todoList} onRemove={handleRemove} />
    </Wrapper>
  );
};

export default App;

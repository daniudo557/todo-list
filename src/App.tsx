import { useState } from "react";
import TodoCardSection from "./components/TodoCardSection";
import TodoInput from "./components/TodoInput";
import { Todo } from "./domains/Todo";
import "./index.css";
import Wrapper from "./components/Wrapper";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleRemove = (selectedTodo: Todo) => {
    const newTodoList = todoList.filter((todo) => todo.id !== selectedTodo.id);

    setTodoList(newTodoList);
  };

  const handleSubmitTodo = (newTodo: Todo) => {
    setTodoList((oldState) => [...oldState, newTodo]);
  };

  return (
    <>
      <Appbar />
      <Wrapper>
        <TodoInput submitTodo={handleSubmitTodo} />
        <TodoCardSection todoList={todoList} onRemove={handleRemove} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;

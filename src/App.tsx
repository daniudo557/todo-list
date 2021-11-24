import { useState } from "react";
import { Todo } from "./domains/Todo";
import "./index.css";
import Wrapper from "./components/Wrapper";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import TodoDetail from "./pages/TodoDetail";
import { Typography } from "@mui/material";

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
        <Switch>
          <Route path="/" exact>
            <Welcome
              todoList={todoList}
              handleSubmitTodo={handleSubmitTodo}
              handleRemove={handleRemove}
            />
          </Route>
          <Route path="/todo/:id">
            <TodoDetail todoList={todoList} handleRemove={handleRemove} />
          </Route>
          <Route path="*">
            <Typography
              variant="h6"
              component="a"
              className="header-link"
              sx={{ flexGrow: 1 }}
            >
              Page not found
            </Typography>
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;

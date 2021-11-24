import { Typography } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

import { Todo } from "src/domains/Todo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TodoCard from "src/components/TodoCard";

import "./TodoDetail.scss";

interface TodoDetailProps {
  todoList: Todo[];
  handleRemove: (todo: Todo) => void;
}

const TodoDetail = (props: TodoDetailProps) => {
  const { todoList, handleRemove } = props;
  const params: any = useParams();
  const history = useHistory();

  const todo = todoList.find((t) => String(t.id) === params.id);

  const handleClick = () => history.goBack();

  if (!todo) return <h1>No data</h1>;

  return (
    <>
      <Typography
        variant="h4"
        component="a"
        onClick={handleClick}
        className="back-link"
        sx={{ flexGrow: 1 }}
      >
        <ArrowBackIosNewIcon />
        Go back
      </Typography>

      <TodoCard todo={todo} onRemove={handleRemove} type="large" />
    </>
  );
};

export default TodoDetail;

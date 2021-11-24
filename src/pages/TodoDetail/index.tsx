import { Typography } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

import { Todo } from "src/domains/Todo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TodoCard from "src/components/TodoCard";

import "./TodoDetail.scss";
import EmptyData from "src/components/EmptyData";

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

  return (
    <>
      <Typography
        variant="h5"
        component="a"
        onClick={handleClick}
        className="back-link"
        sx={{ flexGrow: 1 }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        Go back
      </Typography>

      {todo ? (
        <TodoCard todo={todo} onRemove={handleRemove} type="large" />
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default TodoDetail;

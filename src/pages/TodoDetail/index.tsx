import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TodoCard from "src/components/TodoCard";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import "./TodoDetail.scss";
import Warning from "src/components/Warning";
import { useTodo } from "src/hooks/useTodo";

const TodoDetail = () => {
  const history = useHistory();
  const { todo, isLoading } = useTodo();

  const handleClick = () => history.goBack();

  if (isLoading) return <TodoCard.Skeleton type="large" />;

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
        <TodoCard todo={todo} type="large" />
      ) : (
        <Warning icon={<ErrorOutlineIcon />} message="No data found" />
      )}
    </>
  );
};

export default TodoDetail;

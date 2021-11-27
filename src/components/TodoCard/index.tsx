import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Todo, TodoStatus } from "src/domains/Todo";
import { useTodo } from "src/hooks/useTodo";
import StatusFlag from "../StatusFlag";

import "./TodoCard.scss";

interface TodoCardProps {
  todo: Todo;
  type?: "small" | "large";
}

const TodoCard = ({ todo, type = "small" }: TodoCardProps) => {
  const { removeTodo, updateTodo } = useTodo();

  const isPending = useMemo(
    () => todo.status === TodoStatus.PENDING,
    [todo.status]
  );

  const toggleTodoStatus = useCallback(
    () => (isPending ? TodoStatus.COMPLETED : TodoStatus.PENDING),
    [isPending]
  );

  const handleRemove = useCallback(() => removeTodo(todo), [removeTodo, todo]);

  const handleUpdate = useCallback(() => {
    const newStatus = toggleTodoStatus();

    const newTodo: Todo = { ...todo, status: newStatus };

    updateTodo(newTodo);
  }, [todo, toggleTodoStatus, updateTodo]);

  const SmallCard = () => (
    <div className="card-content">
      <Checkbox defaultChecked={!isPending} onClick={handleUpdate} />
      <Tooltip title="See details">
        <Button
          component={Link}
          to={`/todo/${todo.id}`}
          className="card-link"
          color="primary"
        >
          <p
            className="label"
            style={{ textDecoration: isPending ? "none" : "line-through" }}
          >
            {todo.title}
          </p>
        </Button>
      </Tooltip>

      <Tooltip title="Delete">
        <Button color="error" onClick={handleRemove}>
          <DeleteIcon />
        </Button>
      </Tooltip>
    </div>
  );

  const LargeCard = () => (
    <>
      <CardMedia
        component="img"
        alt="todo list"
        height="140"
        image="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textDecoration: isPending ? "none" : "line-through" }}
          >
            {todo.title}
          </Typography>
          <StatusFlag isPending={isPending} />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemove}>
          Cancel Todo
        </Button>
        <Button size="small" onClick={handleUpdate}>
          Complete Todo
        </Button>
      </CardActions>
    </>
  );

  return (
    <Card className="card">
      {type === "small" ? <SmallCard /> : <LargeCard />}
    </Card>
  );
};

export default TodoCard;

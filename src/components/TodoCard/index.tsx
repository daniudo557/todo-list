import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Todo } from "src/domains/Todo";

import "./TodoCard.scss";

interface TodoCardProps {
  onRemove: (todo: Todo) => void;
  todo: Todo;
  type?: "small" | "large";
}

const TodoCard = ({ onRemove, todo, type = "small" }: TodoCardProps) => {
  const handleRemove = () => onRemove(todo);

  const SmallCard = () => (
    <div className="card-content">
      <Tooltip title="See details">
        <Button
          component={Link}
          to={`/todo/${todo.id}`}
          className="card-link"
          color="primary"
        >
          <p className="label">{todo.label}</p>
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
        <Typography gutterBottom variant="h5" component="div">
          {todo.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemove}>
          Complete Todo
        </Button>
        <Button size="small" onClick={handleRemove}>
          Cancel Todo
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

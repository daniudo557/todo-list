import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Todo } from "src/domains/Todo";
import "./TodoCard.scss";

interface TodoCardProps {
  todo: Todo;
  onRemove: (todo: Todo) => void;
}

const TodoCard = ({ todo, onRemove }: TodoCardProps) => {
  const handleRemove = () => onRemove(todo);

  return (
    <Card className="card">
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
    </Card>
  );
};

export default TodoCard;

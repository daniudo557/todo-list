import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card } from "@mui/material";
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
        <p className="label">{todo.label}</p>
        <Button color="error" onClick={handleRemove}>
          <DeleteIcon />
        </Button>
      </div>
    </Card>
  );
};

export default TodoCard;

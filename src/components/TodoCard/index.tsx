import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card } from "@mui/material";
import { Todo } from "src/domains/Todo";

interface TodoCardProps {
  todo: Todo;
  onRemove: (todo: Todo) => void;
}

const TodoCard = ({ todo, onRemove }: TodoCardProps) => {
  return (
    <Card style={{ width: "100%", marginTop: 32 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p style={{ paddingLeft: 24 }}>{todo.label}</p>
        <Button color="error" onClick={() => onRemove(todo)}>
          <DeleteIcon />
        </Button>
      </div>
    </Card>
  );
};

export default TodoCard;

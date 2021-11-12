import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card } from "@mui/material";
import { Todo } from "src/domains/Todo";

interface TodoCardProps {
  todoList: Todo[];
  onRemove: (todo: Todo) => void;
}

const TodoCard = ({ todoList, onRemove }: TodoCardProps) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Card sx={{ maxWidth: 275 }} style={{ marginTop: 32 }}>
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
      ))}
    </div>
  );
};

export default TodoCard;

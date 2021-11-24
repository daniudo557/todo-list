import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

import { Todo } from "src/domains/Todo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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

      <Card sx={{ maxWidth: "100%", marginTop: "32px" }}>
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
          <Button size="small" onClick={() => handleRemove(todo)}>
            Complete Todo
          </Button>
          <Button size="small" onClick={() => handleRemove(todo)}>
            Cancel Todo
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TodoDetail;

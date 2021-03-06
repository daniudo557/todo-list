import { Collapse } from "@mui/material";
import TodoCard from "../TodoCard";
import { TransitionGroup } from "react-transition-group";
import { useTodo } from "src/hooks/useTodo";

const TodoCardSection = () => {
  const { todoList, isLoading } = useTodo();

  if (isLoading) return <TodoCard.Skeleton />;

  return (
    <TransitionGroup>
      {todoList?.map((todo) => (
        <Collapse key={todo.id}>
          <TodoCard todo={todo} />
        </Collapse>
      ))}
    </TransitionGroup>
  );
};

export default TodoCardSection;

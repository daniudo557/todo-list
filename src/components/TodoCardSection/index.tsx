import { Collapse } from "@mui/material";
import { Todo } from "src/domains/Todo";
import TodoCard from "../TodoCard";
import { TransitionGroup } from "react-transition-group";

interface TodoCardSectionProps {
  todoList: Todo[];
  onRemove: (todo: Todo) => void;
}

const TodoCardSection = ({ todoList, onRemove }: TodoCardSectionProps) => {
  return (
    <TransitionGroup>
      {todoList.map((todo) => (
        <Collapse key={todo.id}>
          <TodoCard todo={todo} onRemove={onRemove} />
        </Collapse>
      ))}
    </TransitionGroup>
  );
};

export default TodoCardSection;

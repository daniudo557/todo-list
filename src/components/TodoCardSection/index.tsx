import { Todo } from "src/domains/Todo";
import TodoCard from "../TodoCard";

interface TodoCardSectionProps {
  todoList: Todo[];
  onRemove: (todo: Todo) => void;
}

const TodoCardSection = ({ todoList, onRemove }: TodoCardSectionProps) => {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoCard todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoCardSection;

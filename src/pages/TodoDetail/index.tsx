import { useParams } from "react-router-dom";
import TodoCard from "src/components/TodoCard";
import { Todo } from "src/domains/Todo";

interface TodoDetailProps {
  todoList: Todo[];
  handleRemove: (todo: Todo) => void;
}

const TodoDetail = (props: TodoDetailProps) => {
  const { todoList, handleRemove } = props;
  const params: any = useParams();
  const todo = todoList.find((t) => String(t.id) === params.id);

  if (!todo) return <h1>No data</h1>;

  return (
    <>
      <h1>{todo.label}</h1>
      <TodoCard todo={todo} onRemove={handleRemove} />
    </>
  );
};

export default TodoDetail;

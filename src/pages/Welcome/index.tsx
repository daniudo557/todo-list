import TodoCardSection from "src/components/TodoCardSection";
import TodoInput from "src/components/TodoInput";
import { Todo } from "src/domains/Todo";

interface WelcomeProps {
  todoList: Todo[];
  handleSubmitTodo: (newTodo: Todo) => void;
  handleRemove: (todo: Todo) => void;
}

const Welcome = (props: WelcomeProps) => {
  const { todoList, handleSubmitTodo, handleRemove } = props;

  return (
    <>
      <TodoInput submitTodo={handleSubmitTodo} />
      <TodoCardSection todoList={todoList} onRemove={handleRemove} />
    </>
  );
};

export default Welcome;

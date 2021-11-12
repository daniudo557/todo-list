import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Todo } from "src/domains/Todo";

interface TodoInputProps {
  submitTodo: (newTodo: Todo) => void;
}

const TodoInput = ({ submitTodo }: TodoInputProps) => {
  const [label, setLabel] = useState<string>();

  const handleChangeTodo = (event: any) => {
    setLabel(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!label) return;

    const id = new Date().getTime() / 1000;
    const newTodo: Todo = { id, label };

    setLabel(undefined);

    return submitTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        variant="standard"
        value={label ?? ""}
        placeholder="Today I have to..."
        onChange={handleChangeTodo}
      />
      <Button
        variant="contained"
        type="submit"
        value="Submit"
        disabled={!label}
      >
        Add Todo
      </Button>
    </form>
  );
};

export default TodoInput;

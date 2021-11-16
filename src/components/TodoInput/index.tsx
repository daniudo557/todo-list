import { Button, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Todo } from "src/domains/Todo";
import "./TodoInput.scss";

interface TodoInputProps {
  submitTodo: (newTodo: Todo) => void;
}

const TodoInput = ({ submitTodo }: TodoInputProps) => {
  const [label, setLabel] = useState<string>();

  const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!label) return;

    const id = new Date().getTime() / 1000;
    const newTodo: Todo = { id, label };

    setLabel(undefined);

    return submitTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="text-field"
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
        Add
      </Button>
    </form>
  );
};

export default TodoInput;

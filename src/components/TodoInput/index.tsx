import { Button, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Todo } from "src/domains/Todo";
import "./TodoInput.scss";

interface TodoInputProps {
  submitTodo: (newTodo: Todo) => void;
}

const TodoInput = ({ submitTodo }: TodoInputProps) => {
  const [label, setLabel] = useState<string>();
  const [hasLabelError, setHasLabelError] = useState<boolean>(false);
  const [description, setDescription] = useState<string>();
  const [hasDescriptionError, setHasDescriptionError] =
    useState<boolean>(false);

  const handleChangeLabel = (event: ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;

    setHasLabelError(newLabel.length < 3);
    setLabel(newLabel);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;

    setHasDescriptionError(newDescription.length < 3);
    setDescription(newDescription);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!label || !description) return;

    const id = new Date().getTime();
    const newTodo: Todo = { id, label, description };

    setLabel(undefined);
    setDescription(undefined);

    return submitTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="text-field"
        variant="standard"
        value={label ?? ""}
        error={hasLabelError}
        helperText={hasLabelError && "Label must have more than 3 characters"}
        placeholder="Today I have to..."
        onChange={handleChangeLabel}
      />
      <TextField
        className="text-field"
        variant="standard"
        value={description ?? ""}
        error={hasDescriptionError}
        helperText={
          hasDescriptionError && "Descrition must have more than 3 characters"
        }
        placeholder="Description"
        onChange={handleChangeDescription}
      />
      <Button
        sx={{ marginLeft: 4 }}
        className="button"
        variant="contained"
        type="submit"
        value="Submit"
        disabled={
          !label || !description || hasLabelError || hasDescriptionError
        }
      >
        Add
      </Button>
    </form>
  );
};

export default TodoInput;

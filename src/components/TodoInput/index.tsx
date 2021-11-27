import { Button, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { Todo } from "src/domains/Todo";
import { useTodo } from "src/hooks/useTodo";
import "./TodoInput.scss";

const TodoInput = () => {
  const { createTodo } = useTodo();
  const [title, setTitle] = useState<string>();
  const [hasTitleError, setHasTitleError] = useState<boolean>(false);
  const [description, setDescription] = useState<string>();
  const [hasDescriptionError, setHasDescriptionError] =
    useState<boolean>(false);

  const handleChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newTitle = event.target.value;

      setHasTitleError(newTitle.length < 3);
      setTitle(newTitle);
    },
    []
  );

  const handleChangeDescription = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newDescription = event.target.value;

      setHasDescriptionError(newDescription.length < 3);
      setDescription(newDescription);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();

      if (!title || !description) return;

      const newTodo: Partial<Todo> = { title, description };

      setTitle(undefined);
      setDescription(undefined);

      createTodo(newTodo);
    },
    [createTodo, description, title]
  );

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="text-field"
        variant="standard"
        value={title ?? ""}
        error={hasTitleError}
        helperText={hasTitleError && "Title must have more than 3 characters"}
        placeholder="Today I have to..."
        onChange={handleChangeTitle}
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
        className="button"
        variant="contained"
        type="submit"
        value="Submit"
        disabled={
          !title || !description || hasTitleError || hasDescriptionError
        }
      >
        Add
      </Button>
    </form>
  );
};

export default TodoInput;

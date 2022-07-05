import React, { ChangeEvent, FormEvent, useState } from "react";

type AddTodo = (newTodo: string) => void;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        data-test-id={"add-new-item"}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

import React from "react";

import { Todo } from "./toggleComplete";

type ToggleComplete = (selectedTodo: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          name={`checkbox-${todo.text}`}
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};

import React from "react";

import { TodoListItem } from "./to-do-list-item";
import { Todo, ToggleComplete } from "./toggleComplete";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <>
      <div>
        <h1>Existing tasks</h1>
        <br />
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </>
  );
};

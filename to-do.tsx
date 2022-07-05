import React, { useState } from "react";

import { AddTodoForm } from "./add-to-do-form";
import { getExistingToDos } from "./getExistingToDoList";
import { TodoList } from "./to-do-list";
import { Todo, ToggleComplete } from "./toggleComplete";

type AddTodo = (newTodo: string) => void;

export const ToDoComponent: React.FC = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>(getExistingToDos);

  const addTodo: AddTodo = (newTodoItem) => {
    newTodoItem.trim() !== "" &&
      setTodoList([...todoList, { text: newTodoItem, complete: false }]);
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <div>
        <h1>To Do App</h1>
        <br />
      </div>
      <TodoList todos={todoList} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

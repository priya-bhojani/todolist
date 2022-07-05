import { beforeEach, describe } from "@jest/globals";


import { TodoListItem } from "./to-do-list-item";
import { Todo } from "./toggleComplete";
import { render, screen } from '@testing-library/react';
import React from "react";



const mockToggleComplete = jest.fn();

const todo: Todo = {
  text: "dummy to do item 1",
  complete: true,
};
describe("To Do List Item", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <>
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={mockToggleComplete}
        />
      </>
    );
  });

  it("should render to do item checkbox", () => {
    const checkBoxForToDoItem = screen.getByRole("checkbox", {
      name: todo.text,
    });
    expect(checkBoxForToDoItem).toBeInTheDocument();
  });

  it("should render to do item text", () => {
    const toDoItem = screen.getByText(todo.text);
    expect(toDoItem).toBeInTheDocument();
  });
});

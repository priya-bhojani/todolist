import { beforeEach, describe } from "@jest/globals";
import React from "react";

import { TodoList } from "./to-do-list";
import { Todo } from "./toggleComplete";
import { render, screen } from '@testing-library/react';

const mockToggleComplete = jest.fn();

const todoList: Array<Todo> = [
  {
    text: "dummy task 1",
    complete: true,
  },
  {
    text: "dummy task 2",
    complete: true,
  },
];

describe("To Do List", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <>
        <TodoList todos={todoList} toggleComplete={mockToggleComplete} />
      </>
    );
  });

  it("should render Existing tasks", () => {
    expect(screen.getByText("Existing tasks")).toBeInTheDocument();
  });

  it("should render to do items", () => {
    expect(screen.getByText("dummy task 1")).toBeInTheDocument();
  });
});

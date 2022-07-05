import { beforeEach, describe } from "@jest/globals";
import React from "react";

import { AddTodoForm } from "./add-to-do-form";
import { render, screen } from '@testing-library/react';

const addTodo = jest.fn();

describe("Add a new to do item", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <>
        <AddTodoForm addTodo={addTodo} />
      </>
    );
  });

  it("should render the textbox to add a new item", () => {
    const textBox = screen.getByTestId("add-new-item");
    expect(textBox).toBeInTheDocument();
  });

  it("should render Add button", () => {
    const textBox = screen.getByRole("button", {
      name: "Add Todo",
    });
    expect(textBox).toBeInTheDocument();
  });
});

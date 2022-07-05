import { beforeEach, describe } from "@jest/globals";
import React from "react";

import { ToDoComponent } from "./to-do";
import { render, screen } from '@testing-library/react';

describe("To Do Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(
      <>
        <ToDoComponent />
      </>
    );
  });

  it("should render the component", () => {
    expect(screen.getByText("To Do App")).toBeInTheDocument();
  });
});

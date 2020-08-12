import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TaskRow from "../components/TaskRow";

beforeAll(cleanup);

const data = { name: "Task One", done: false, id: 0 };

describe("test <TaskRow /> component", function () {
  it("should render the task", function () {
    const removeTask = jest.fn();
    const toggleTask = jest.fn();

    const { getByTestId } = render(
      <TaskRow task={data} removeTask={removeTask} toggleTask={toggleTask} />
    );

    expect(getByTestId("task-row")).toBeTruthy();
    expect(getByTestId("task-name").textContent).toBe("Task One");
  });

  it("should show toggle and submit component", function () {
    const removeTask = jest.fn();
    const toggleTask = jest.fn();

    const { getByTestId } = render(
      <TaskRow task={data} removeTask={removeTask} toggleTask={toggleTask} />
    );

    fireEvent.click(getByTestId("toggle"));
    expect(toggleTask).toHaveBeenCalledTimes(1);
    expect(getByTestId("toggle").checked).toEqual(false);

    fireEvent.click(getByTestId("toggle"));
    expect(toggleTask).toHaveBeenCalledTimes(2);

    fireEvent.click(getByTestId("submit"));
    expect(removeTask).toHaveBeenCalledTimes(1);
  });

  it("should take snapshot", function () {
    const removeTask = jest.fn();
    const toggleTask = jest.fn();

    const { container } = render(
      <TaskRow task={data} removeTask={removeTask} toggleTask={toggleTask} />
    );

    expect(container).toMatchSnapshot();
  });
});

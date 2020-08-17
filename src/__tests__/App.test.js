import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

beforeAll(cleanup);

describe("<App />", function () {
  it("should render tasks not done", function () {
    const { queryByText } = render(<App />);

    expect(queryByText("Task One")).toBeInTheDocument();
    expect(queryByText("Task Two")).toBeInTheDocument();
    expect(queryByText("Task Four")).toBeInTheDocument();
  });

  it("should not render tasks done", function () {
    const { queryByText } = render(<App />);

    fireEvent.click(screen.getByTestId("visibility"));
    expect(queryByText("Task Three")).toBeInTheDocument();
  });
});

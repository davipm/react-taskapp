import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import VisibilityControl from "../components/VisibilityControl";

beforeAll(cleanup);

describe("<VisibilityControl />", function () {
  it("should render correctly", function () {
    const onCallback = jest.fn();
    const { container } = render(
      <VisibilityControl
        isChecked={false}
        description="test"
        callBack={onCallback}
      />
    );

    expect(container.querySelector("label").textContent).toBe("Show test");
    expect(container.querySelector("input").checked).toBe(false);

    fireEvent.click(container.querySelector("input"));
    expect(onCallback).toHaveBeenCalledTimes(1);
  });

  it("should take snapshot", function () {
    const onCallback = jest.fn();
    const { container } = render(
      <VisibilityControl
        isChecked={false}
        description="test"
        callBack={onCallback}
      />
    );

    expect(container).toMatchSnapshot();
  });
});

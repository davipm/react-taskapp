import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import TaskCreator from "../components/TaskCreator";

beforeAll(cleanup);

describe('<TaskCreator />', function () {
  it('should call the submit', async function () {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<TaskCreator callBack={onSubmit} />);

    fireEvent.click(getByTestId('submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should handle the name of the task', function () {
    const onSubmit = jest.fn();
    const { getByPlaceholderText } = render(<TaskCreator callBack={onSubmit} />);

    fireEvent.change(getByPlaceholderText('Task Name'), {
      target: { value: "Davi Pereira" }
    });
  });
});

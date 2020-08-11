import React from "react";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import TaskBanner from "../components/TaskBanner";

beforeEach(cleanup);

const name = 'Davi Pereira';
const data = [
  { name: "Task One", done: false, id: 0 },
  { name: "Task Two", done: false, id: 1 },
  { name: "Task Three", done: true, id: 2 },
  { name: "Task Four", done: false, id: 3 },
];

describe('Task Banner component', function () {
  it('should render user name and length task', function () {
    const { getByTestId } = render(<TaskBanner taskItems={data} userName={name} />);

    expect(getByTestId('title')).toBeTruthy();
    expect(getByTestId('title').textContent).toBe('Davi Pereira\'s Tasks App (3) tasks to do.');
  });

  it('should take snapshot', function () {
    const { container } = render(<TaskBanner taskItems={data} userName={name} />);
    expect(container).toMatchSnapshot();
  });
});

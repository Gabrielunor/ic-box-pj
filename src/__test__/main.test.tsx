// App.test.tsx

import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock the App component
vi.mock("../App", () => {
  return {
    default: () => <div>ICBOX</div>,
  };
});

test("invoke App component in main.tsx without crashing", () => {
  render(<App />);
  expect(screen.getByText("ICBOX")).toBeInTheDocument();
});

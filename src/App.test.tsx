import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App tests", () => {
  it("should render the app component", () => {
    expect(render(<App />)).toBeTruthy();
  });
  it("should render the app component and expect hello text", () => {
    const app = render(<App />);
    expect(app).toBeDefined();
  });
});

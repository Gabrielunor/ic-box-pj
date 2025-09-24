import { render } from "@testing-library/react";

import NotFoundPage from "..";

describe("code snippet", () => {
  // Renders a div with class 'h-screen flex items-center justify-center'
  it("should render a div with the correct classes", () => {
    const { container } = render(<NotFoundPage />);
    const divElement = container.querySelector("div");
    expect(divElement).toHaveClass("h-screen flex items-center justify-center");
  });

  // Component renders correctly with no props
  it("should render correctly without props", () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText("404 | No route was found")).toBeInTheDocument();
  });
});

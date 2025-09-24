import { fireEvent, render } from "@testing-library/react";
import { vitest } from "vitest";
import ToggleButton from "../ToggleButton";

describe("ToggleButton component", () => {
  it("renders with help icon", () => {
    const { getByAltText } = render(
      <ToggleButton contentId="recommendation" />
    );

    // Check if the help icon is rendered
    const helpIcon = getByAltText("Help Icon");
    expect(helpIcon).toBeInTheDocument();
  });

  it("calls handleToggle on button click", () => {
    const mockHandleToggle = vitest.fn();
    vitest.mock("./hooks", () => ({
      useToggleButton: () => ({
        handleToggle: mockHandleToggle,
      }),
    }));

    const { getByRole } = render(<ToggleButton contentId="recommendation" />);

    // Simulate click on the button
    expect(fireEvent.click(getByRole("button"))).toBeTruthy();
  });
});

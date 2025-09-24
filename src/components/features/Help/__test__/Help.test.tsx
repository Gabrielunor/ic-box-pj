import { vitest } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Help from "..";

describe("Help component", () => {
  // Mocking initial state and functions
  const mockToggleHelpActive = vitest.fn();
  const mockSetHelpTopic = vitest.fn();
  const mockUseICBoxPFStore = vitest.fn();

  mockUseICBoxPFStore.mockReturnValue({
    isHelpActive: true,
    helpTopic: "Recomendação",
    setHelpTopic: mockSetHelpTopic,
    toggleHelpActive: mockToggleHelpActive,
  });

  it("renders help component correctly", () => {
    const { getByText, getByAltText } = render(<Help />);

    // Check if the component renders with title
    expect(getByText("AJUDA INTERCONNECT BOX - PJ")).toBeInTheDocument();

    // Check if close button is rendered
    const closeButton = getByAltText("Fechar/Close");
    expect(closeButton).toBeInTheDocument();

    // Simulate click on close button
    expect(fireEvent.click(closeButton)).toBeTruthy();
  });

  it("displays correct help topic content", () => {
    const { getByText } = render(<Help />);
    expect(getByText("Recomendação")).toBeInTheDocument();
  });
});

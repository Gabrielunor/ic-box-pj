/* eslint-disable @typescript-eslint/no-explicit-any */
import { useICBoxPJStore } from "@/lib/store";
import { act, renderHook } from "@testing-library/react";
import { vitest } from "vitest";
import { useToggleButton } from "../ToggleButton/hooks";
vitest.mock("@/lib/store", () => ({
  useICBoxPJStore: vitest.fn(),
}));

describe("useToggleButton hook", () => {
  it("calls setHelpTopic and toggleHelpActive on handleToggle", () => {
    // Mock the return values of useICBoxPFStore
    const mockSetHelpTopic = vitest.fn();
    const mockToggleHelpActive = vitest.fn();

    (useICBoxPJStore as any).mockImplementation((selector: any) =>
      selector({
        setHelpTopic: mockSetHelpTopic,
        toggleHelpActive: mockToggleHelpActive,
      })
    );

    // Render the hook
    const { result } = renderHook(() => useToggleButton());

    // Call handleToggle with a mock contentId
    act(() => {
      result.current.handleToggle("recommendation");
    });

    // Assert that setHelpTopic and toggleHelpActive were called with the correct arguments
    expect(mockSetHelpTopic).toHaveBeenCalledWith("recommendation");
    expect(mockToggleHelpActive).toHaveBeenCalled();
  });

  it("throws an error when contentId is null", () => {
    // Render the hook
    const { result } = renderHook(() => useToggleButton());

    // Call handleToggle with null contentId and expect it to throw an error
    expect(() => {
      result.current.handleToggle(null);
    }).toThrow("Help Topic Content ID must not be null");
  });
});

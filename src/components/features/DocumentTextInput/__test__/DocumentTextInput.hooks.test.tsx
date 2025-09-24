import { renderHook } from "@testing-library/react";
import { useCNPJInput } from "../hooks";

describe("useCPFInput", () => {
  it("should format CPF correctly", () => {
    const { result } = renderHook(() => useCNPJInput());

    expect(result.current.formatCNPJ("00.000.000/0000-00")).toBe(
      "00000000000000"
    );
    expect(result.current.formatCNPJ("")).toBe("");
    expect(result.current.formatCNPJ("")).toBe("");
  });

  it("should handle focus correctly", () => {
    const { result } = renderHook(() => useCNPJInput());
    const mockEvent = {
      target: {
        select: vi.fn(),
      },
    };

    // @ts-expect-error not all methods are been used
    result.current.handleFocus(mockEvent);

    expect(mockEvent.target.select).toHaveBeenCalled();
  });

  it("should handle key press correctly", () => {
    const { result } = renderHook(() => useCNPJInput());
    const mockEvent = {
      key: "Enter",
      currentTarget: {
        blur: vi.fn(),
        focus: vi.fn(),
      },
    };

    // @ts-expect-error not all methods are been used
    result.current.handleKeyPress(mockEvent);

    expect(mockEvent.currentTarget.blur).toHaveBeenCalled();
    expect(mockEvent.currentTarget.focus).toHaveBeenCalled();
  });
});

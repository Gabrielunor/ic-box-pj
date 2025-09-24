import { describe, it, expect, vi } from "vitest";
import { useDialog } from "@/components/features/Dialog/hooks"; // Adjust the path as necessary
import { useICBoxPJStore } from "@/lib/store";
import { ResponseError } from "@/lib/store/types";

// Mock the Zustand store
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

describe("useDialog Hook", () => {
  it("should call setError with an empty ResponseError object when handleClose is called", () => {
    // Create a mock for setError
    const setErrorMock = vi.fn();

    // Mock useICBoxPJStore to return the setError function
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockImplementation(
      (selector) => {
        // Mock the selector to always return the setErrorMock function
        return selector({ setError: setErrorMock });
      }
    );

    // Get the handleClose function from useDialog
    const { handleClose } = useDialog();

    // Call handleClose
    handleClose();

    // Verify that setError was called with an empty ResponseError object
    expect(setErrorMock).toHaveBeenCalledWith({} as ResponseError);
  });
});

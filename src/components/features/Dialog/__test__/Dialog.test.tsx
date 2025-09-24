import Dialog from "@/components/features/Dialog"; // Adjust path as necessary
import { useICBoxPJStore } from "@/lib/store";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock Zustand store and hooks
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

// Mock the useDialog hook
vi.mock("@/components/Dialog/hooks", () => ({
  useDialog: vi.fn(() => ({
    handleClose: vi.fn(),
  })),
}));

describe("Dialog Component", () => {
  //   it("should render with the correct error message and close when the button is clicked", () => {
  //     // Mock the Zustand store to return an error
  //     const errorMock = { message: "Network Error", status: 500 };
  //     (useICBoxPJStore as ReturnType<typeof vi.fn>).mockReturnValue({
  //       error: errorMock,
  //     });

  //     // Use the mocked handleClose function from useDialog
  //     const { handleClose } = useDialog();

  //     // Render the Dialog component
  //     render(<Dialog />);

  //     // Check if the title, description, and error message are in the document
  //     expect(screen.getByTestId("dialog-title")).toBeInTheDocument();
  //     expect(screen.getByTestId("dialog-description")).toBeInTheDocument();
  //     expect(screen.getByTestId("dialog-clode")).toHaveTextContent("CODE: 500");
  //     expect(screen.getByTestId("dialog-message")).toHaveTextContent(
  //       "Network Error"
  //     );

  //     // Simulate closing the dialog
  //     const closeButton = screen.getByTestId("dialog-close-button");
  //     fireEvent.click(closeButton);

  //     // Check that handleClose was called
  //     expect(handleClose).toHaveBeenCalled();
  //   });

  it("should not render if there is no error message", () => {
    // Mock Zustand store with no error message
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      error: {},
    });

    // Render the Dialog component
    const { queryByTestId } = render(<Dialog />);

    // Check that the dialog is not in the document
    expect(queryByTestId("dialog-title")).toBeNull();
    expect(queryByTestId("dialog-description")).toBeNull();
    expect(queryByTestId("dialog-close-button")).toBeNull();
  });
});

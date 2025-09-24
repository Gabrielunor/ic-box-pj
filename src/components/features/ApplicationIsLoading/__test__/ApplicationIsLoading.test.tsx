import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ApplicationIsLoading from "..";

describe("ApplicationIsLoading", () => {
  afterEach(() => {
    // Clear all mocked modules after each test case
    vi.clearAllMocks();
  });

  it("renders the application loading overlay", async () => {
    render(<ApplicationIsLoading />);

    // Wait for the loading state to update
    await waitFor(() => {
      const overlayElement = screen.getByTestId("application-loading-overlay");
      expect(overlayElement).toBeInTheDocument();
      expect(overlayElement).toHaveClass("bg-white/70");
    });

    // Verify spinner and loading text are present
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Por favor, aguarde enquanto a aplicação é carregada.../i
      )
    ).toBeInTheDocument();
  });
});

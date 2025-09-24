import LoadingOverlay from "@/components/features/LoadingOverlay";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

describe("LoadingOverlay", () => {
  afterEach(() => {
    // Clear all mocked modules after each test case
    vi.clearAllMocks();
  });

  it("renders the loading overlay when loading is true", async () => {
    // Mock useICBoxPFStore to return loading as true
    vi.mock("@/lib/store", () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useICBoxPJStore: (selector: any) => {
        const state = { loading: true };
        return selector(state);
      },
    }));

    render(<LoadingOverlay />);

    // Wait for the loading state to update
    await waitFor(() => {
      const overlayElement = screen.getByTestId("loading-overlay");
      expect(overlayElement).toBeInTheDocument();
      expect(overlayElement).toHaveClass("bg-white/70");
      expect(overlayElement).not.toHaveClass("hidden");
    });

    // Verify spinner and loading text are present
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(/Por favor, aguarde.../i)).toBeInTheDocument();
  });
});

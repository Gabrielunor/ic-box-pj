import { useICBoxPJStore } from "@/lib/store";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import ProtectedRoute from "../"; // adjust the import path as necessary

// Mock the store
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

// Mock the getProductVersion function
vi.mock("@/utils/getProductVersion", () => ({
  getProductVersion: vi.fn(() => "aprova"),
}));

describe("ProtectedRoute Component", () => {
  const mockSetAuthToken = vi.fn();
  const mockSetVersion = vi.fn();

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  const renderProtectedRoute = (authToken: string) => {
    // @ts-expect-error
    (useICBoxPJStore as jest.Mock).mockImplementation((fn) =>
      fn({
        authToken,
        setAuthToken: mockSetAuthToken,
        setVersion: mockSetVersion,
      })
    );

    const history = createMemoryHistory();
    return render(
      <Router location={history.location} navigator={history}>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </Router>
    );
  };

  it("renders children when the authToken is present", () => {
    renderProtectedRoute("valid_token");

    expect(screen.getByText("Protected Content")).toBeInTheDocument();
    // expect(mockSetAuthToken).not.toHaveBeenCalled(); // Ensure setAuthToken is not called
    expect(mockSetVersion).toHaveBeenCalled(); // Ensure setVersion is called
  });

  it("renders InvalidSession when the authToken is not present", () => {
    renderProtectedRoute("");

    expect(
      screen.getByText("Sessão inválida! Por favor, faça o login novamente")
    ).toBeInTheDocument();
    expect(mockSetAuthToken).toHaveBeenCalledWith(""); // Ensure setAuthToken is called with empty string
    expect(mockSetVersion).toHaveBeenCalled(); // Ensure setVersion is called
  });
});

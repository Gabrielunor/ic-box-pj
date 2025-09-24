import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchFormPage from "@/components/pages/SearchFormPage";

// Mocking components used in SearchFormPage
vi.mock("@/components/features/AppHeader", () => ({
  __esModule: true,
  default: () => <div data-testid="app-header">AppHeader</div>,
}));

vi.mock("@/components/features/Dialog", () => ({
  __esModule: true,
  default: () => <div data-testid="dialog">Dialog</div>,
}));

vi.mock("@/components/features/LoadingOverlay", () => ({
  __esModule: true,
  default: () => <div data-testid="loading-overlay">LoadingOverlay</div>,
}));

vi.mock("@/components/features/SearchForm", () => ({
  __esModule: true,
  default: () => <div data-testid="search-form">SearchForm</div>,
}));

describe("SearchFormPage", () => {
  it("renders all components correctly", () => {
    render(<SearchFormPage />);

    expect(screen.getByTestId("app-header")).toBeInTheDocument();
    expect(screen.getByTestId("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("loading-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });
});

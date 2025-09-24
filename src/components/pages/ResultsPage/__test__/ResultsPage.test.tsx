import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResultsPage from "@/components/pages/ResultsPage";

// Mocking components used in ResultsPage
vi.mock("@/components/features/AppHeader", () => ({
  __esModule: true,
  default: () => <div data-testid="app-header">AppHeader</div>,
}));

vi.mock("@/components/features/CardDecision", () => ({
  __esModule: true,
  default: () => <div data-testid="card-decision">CardDecision</div>,
}));

vi.mock("@/components/features/CardDocument", () => ({
  __esModule: true,
  default: () => <div data-testid="card-document">CardDocument</div>,
}));

vi.mock("@/components/features/CardDocumentStatus", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="card-document-status">CardDocumentStatus</div>
  ),
}));

vi.mock("@/components/features/CardInformation", () => ({
  __esModule: true,
  default: () => <div data-testid="card-information">CardInformation</div>,
}));

vi.mock("@/components/features/ConfidentiallityText", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="confidentiallity-text">ConfidentiallityText</div>
  ),
}));

vi.mock("@/components/features/Help", () => ({
  __esModule: true,
  default: () => <div data-testid="help">Help</div>,
}));

describe("ResultsPage", () => {
  it("renders all components correctly", () => {
    render(<ResultsPage />);

    expect(screen.getByTestId("app-header")).toBeInTheDocument();
    expect(screen.getByTestId("card-decision")).toBeInTheDocument();
    expect(screen.getByTestId("card-document")).toBeInTheDocument();
    expect(screen.getByTestId("card-document-status")).toBeInTheDocument();
    expect(screen.getByTestId("card-information")).toBeInTheDocument();
    expect(screen.getByTestId("confidentiallity-text")).toBeInTheDocument();
    expect(screen.getByTestId("help")).toBeInTheDocument();
  });
});

import { useICBoxPJStore } from "@/lib/store";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CardDecision from "../"; // Adjust the path as needed

// Mock Zustand store
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

// Mock the recommendations constant
vi.mock("@/constants/recommendations", () => ({
  default: {
    1: {
      A: "Recommendation A",
      B: "Recommendation B",
    },
    2: {
      A: "Recommendation C",
      B: "Recommendation D",
    },
  },
}));

// Mock useCardDecision module
vi.mock("./useCardDecision", () => ({
  useCardDecision: () => ({
    getTextClasses: vi.fn().mockReturnValue("mock-text-class"),
  }),
}));

describe("CardDecision", () => {
  const mockUseICBoxPFStore = useICBoxPJStore as any;

  beforeEach(() => {
    // Reset the Zustand store mock before each test
    mockUseICBoxPFStore.mockReset();
  });

  it("renders the recommendation based on the store values", () => {
    // Mock Zustand store values for result and version
    // @ts-expect-error selector is mocked
    mockUseICBoxPFStore.mockImplementation((selector) => {
      if (selector.toString().includes("state.result.decision")) {
        return { code: "A" }; // result.decision
      }
      if (selector.toString().includes("state.version")) {
        return "1"; // version
      }
      return undefined;
    });

    render(<CardDecision />);

    // Check if the correct recommendation and indicator text are rendered
    expect(screen.getByText("Nossa recomendação é:")).toBeInTheDocument();
    expect(screen.getByText("Recommendation A")).toBeInTheDocument();
  });

  it("hides the indicator text when code is '0'", () => {
    // @ts-expect-error selector is mocked
    mockUseICBoxPFStore.mockImplementation((selector) => {
      if (selector.toString().includes("state.result.decision")) {
        return { code: "0" }; // result.decision
      }
      if (selector.toString().includes("state.version")) {
        return "1"; // version
      }
      return undefined;
    });

    render(<CardDecision />);

    // Check if the indicator text is hidden
    const indicatorText = screen.getByTestId("indicator-text");
    expect(indicatorText).toHaveClass("hidden");
    expect(indicatorText).toBeInTheDocument();
  });

  it("renders the ToggleButton component", () => {
    // @ts-expect-error selector is mocked
    mockUseICBoxPFStore.mockImplementation((selector) => {
      if (selector.toString().includes("state.result.decision")) {
        return { code: "B" }; // result.decision
      }
      if (selector.toString().includes("state.version")) {
        return "2"; // version
      }
      return undefined;
    });

    render(<CardDecision />);

    // Check if the ToggleButton is rendered
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

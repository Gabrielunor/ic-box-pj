import { useICBoxPJStore } from "@/lib/store";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CardInformation from "../";
import * as cardInfo from "../useCardInformation";

// Mock Zustand store
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

// Mock the titles constant
vi.mock("@/constants/titles", () => ({
  default: {
    aprova: {
      A: "Mock Title A",
      B: "Mock Title B",
    },
    "pre-qualificacao": {
      A: "Mock Title C",
      B: "Mock Title D",
    },
  },
}));

describe("CardInformation", () => {
  const mockUseICBoxPJStore = useICBoxPJStore as any;

  beforeEach(() => {
    // Reset the Zustand store mock before each test
    mockUseICBoxPJStore.mockReset();
  });

  it("renders the correct title and message based on store values when version is 'aprova'", () => {
    // Mock Zustand store values for result and version
    mockUseICBoxPJStore
      .mockReturnValueOnce({ message: ["Mock Message 1"], code: "A" }) // result.decision
      .mockReturnValueOnce("aprova"); // version

    // Mock the methods from useCardInformation
    vi.spyOn(cardInfo, "useCardInformation").mockReturnValue({
      getDefinePositivoSuggestion: vi
        .fn()
        .mockReturnValue(<p>Mock Suggestion 1</p>),
      getTextClasses: vi.fn().mockReturnValue("mock-text-class"),
    });

    render(<CardInformation />);

    // Check if the correct title and message are rendered
    expect(screen.getByText("Mock Title A")).toBeInTheDocument();
    expect(screen.getByText("Mock Message 1")).toBeInTheDocument();
    expect(screen.getByText("Mock Suggestion 1")).toBeInTheDocument();
  });

  it("renders the correct title and message when version is not 'aprova'", () => {
    // Mock Zustand store values for result and version
    mockUseICBoxPJStore
      .mockReturnValueOnce({ message: ["Mock Message 2"], code: "B" }) // result.decision
      .mockReturnValueOnce("pre-qualificacao"); // version

    // Mock the methods from useCardInformation
    vi.spyOn(cardInfo, "useCardInformation").mockReturnValue({
      getDefinePositivoSuggestion: vi
        .fn()
        .mockReturnValue(<p>Mock Suggestion 2</p>),
      getTextClasses: vi.fn().mockReturnValue("mock-text-class"),
    });

    render(<CardInformation />);

    // Check if the message is rendered
    expect(screen.getByText("Mock Message 2")).toBeInTheDocument();
  });

  it("calls getTextClasses with correct arguments and renders the suggestion when code is not '0'", () => {
    // Mock Zustand store values for result and version
    mockUseICBoxPJStore
      .mockReturnValueOnce({ message: ["Mock Message 3"], code: "A" }) // result.decision
      .mockReturnValueOnce("aprova"); // version

    // Mock the methods from useCardInformation
    const getTextClassesMock = vi.fn().mockReturnValue("mock-text-class");
    const getDefinePositivoSuggestion = vi
      .fn()
      .mockReturnValue(<p>Mock Suggestion 3</p>);

    vi.spyOn(cardInfo, "useCardInformation").mockReturnValue({
      getDefinePositivoSuggestion: getDefinePositivoSuggestion,
      getTextClasses: getTextClassesMock,
    });

    render(<CardInformation />);

    // Ensure getTextClasses was called with correct arguments
    expect(getTextClassesMock).toHaveBeenCalledWith("A", "aprova");

    // Check if the suggestion and message are rendered
    expect(screen.getByText("Mock Suggestion 3")).toBeInTheDocument();
    expect(screen.getByText("Mock Message 3")).toBeInTheDocument();
  });

  it("does not render the suggestion when code is '0'", () => {
    // Mock Zustand store values for result and version
    mockUseICBoxPJStore
      .mockReturnValueOnce({ message: ["Mock Message 4"], code: "0" }) // result.decision
      .mockReturnValueOnce("aprova"); // version

    // Mock the methods from useCardInformation
    vi.spyOn(cardInfo, "useCardInformation").mockReturnValue({
      getDefinePositivoSuggestion: vi.fn(),
      getTextClasses: vi.fn().mockReturnValue("mock-text-class"),
    });

    render(<CardInformation />);

    // Check that the suggestion is not rendered
    expect(screen.queryByText("Mock Suggestion 4")).not.toBeInTheDocument();
    expect(screen.getByText("Mock Message 4")).toBeInTheDocument();
  });
});

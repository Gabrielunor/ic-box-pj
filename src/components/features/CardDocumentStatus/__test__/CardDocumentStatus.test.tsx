import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CardDocumentStatus from "@/components/features/CardDocumentStatus";
import { useICBoxPJStore } from "@/lib/store";

// Mock the Zustand store
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

describe("CardDocumentStatus", () => {
  it("renders correctly with a valid situation", () => {
    // Mock the Zustand store to return a valid situation
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      situation: "situacao",
    });

    render(<CardDocumentStatus />);

    // Check if the correct situation is rendered in uppercase
    expect(screen.getByText(/Situação do CNPJ/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "SITUACAO"
    );
  });

  it("renders fallback '-' when situation is undefined", () => {
    // Mock the Zustand store to return undefined situation
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      situation: undefined,
    });

    render(<CardDocumentStatus />);

    // Check if the fallback "-" is rendered
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("-");
  });
});

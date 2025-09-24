import { useICBoxPJStore } from "@/lib/store";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CardDocument from "..";

// Mock the useICBoxPJStore hook
vi.mock("@/lib/store", () => ({
  useICBoxPJStore: vi.fn(),
}));

// Mock the cnpj formatter
vi.mock("cpf-cnpj-validator", () => ({
  cnpj: {
    format: vi.fn((doc) => `formatted-${doc}`), // Ensure this returns a recognizable format
  },
}));

describe("CardDocument", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the CNPJ correctly", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      document: "00000000000191",
    });

    render(<CardDocument />);

    const cnpjElement = screen.getByText("formatted-00000000000191");
    expect(cnpjElement).toBeInTheDocument();
  });

  it("renders the company name when available", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      document: "00000000000191",
      name: "Razão Social do CNPJ 00000000000191",
    });

    render(<CardDocument />);

    const nameElement = screen.getByText("Razão Social do CNPJ 00000000000191");
    expect(nameElement).toBeInTheDocument();
  });

  it("does not render company name when not available", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useICBoxPJStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      document: "00000000000191",
      name: "",
    });

    render(<CardDocument />);

    const nameLabel = screen.queryByText("Razão Social");
    const nameElement = screen.queryByText("Test Company");
    expect(nameLabel).not.toBeInTheDocument();
    expect(nameElement).not.toBeInTheDocument();
  });
});

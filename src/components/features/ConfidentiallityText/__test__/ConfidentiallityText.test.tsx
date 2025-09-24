import ConfidentiallityText from "@/components/features/ConfidentiallityText";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

// Mock moment
vi.mock("moment", () => {
  return {
    default: () => ({
      format: (formatString: string) => {
        switch (formatString) {
          case "DD":
            return "19";
          case "MMM":
            return "Jun";
          case "YY":
            return "24";
          case "HH:mm:ss":
            return "12:34:56";
          default:
            return "";
        }
      },
    }),
  };
});

describe("ConfidentiallityText", () => {
  it("renders the confidentiality text with the correct date and time", () => {
    render(<ConfidentiallityText />);

    expect(
      screen.getByText(
        /Esta análise foi baseada na validação de informações existentes na/
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Boa Vista SCPC/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /A decisão de negociação é de total responsabilidade do credor e de acordo com sua própria política de crédito./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /INFORMAÇÕES CONFIDENCIAIS - SÃO PAULO\/SP, 19.jun.24 12:34:56 NET 9999/
      )
    ).toBeInTheDocument();
  });
});

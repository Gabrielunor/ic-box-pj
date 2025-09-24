import FormDisclaimer from "@/components/features/FormDisclaimer";
import { render, screen } from "@testing-library/react";

describe("FormDisclaimer", () => {
  it("renders the disclaimer text", () => {
    render(<FormDisclaimer />);

    const disclaimerText =
      "Esta consulta é de uso exclusivo para a concessão de crédito, realização " +
      "de venda a prazo ou quaisquer outras transações comerciais e empresariais " +
      "que impliquem risco financeiro.";

    expect(screen.getByText(disclaimerText)).toBeInTheDocument();
  });
});

import InvalidSession from "@/components/features/InvalidSession";
import { render, screen } from "@testing-library/react";

describe("InvalidSession", () => {
  it("renders the invalid session message", () => {
    render(<InvalidSession />);

    const invalidSessionMessage =
      "Sessão inválida! Por favor, faça o login novamente";

    expect(screen.getByText(invalidSessionMessage)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { useFormContext } from "react-hook-form";
import { vitest } from "vitest";
import SearchButton from "..";

it("should enable button when formState.isValid is true", () => {
  vitest.mock("react-hook-form", () => ({
    useFormContext: vitest.fn(),
  }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (useFormContext as any).mockReturnValue({
    formState: { isValid: true },
  });

  render(<SearchButton />);

  const button = screen.getByRole("button", { name: /Realizar consulta/i });
  expect(button).toBeEnabled();
});

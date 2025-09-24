import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AppHeader from "../../AppHeader";

import { useICBoxPJStore } from "@/lib/store";
import { Result } from "@/lib/store/types";

describe("AppHeader test suit", () => {
  it("Should render the component without any errors and without action buttons", () => {
    const renderedComponent = render(<AppHeader />);
    const text = renderedComponent.queryByText("Realizar nova consulta");

    expect(renderedComponent).toBeDefined();
    expect(text).toBeNull();
  });

  it("Should render the header component with action buttons", () => {
    useICBoxPJStore.setState({
      result: {
        summary: {},
        decision: {},
      } as Result,
    });

    const { getByText } = render(<AppHeader />);

    const newInquiry = getByText(/Realizar nova consulta/);
    const pdf = getByText(/Salvar PDF/);
    const print = getByText(/Imprimir/);

    expect(newInquiry).toBeDefined();
    expect(pdf).toBeDefined();
    expect(print).toBeDefined();
  });
});

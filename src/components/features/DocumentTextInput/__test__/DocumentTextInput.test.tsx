import { act, fireEvent, render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DocumentTextInput from "..";

describe("DocumentTextInput", () => {
  it("should format CNPJ input correctly", () => {
    const Wrapper = ({ children }: PropsWithChildren) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    render(
      <Wrapper>
        <DocumentTextInput />
      </Wrapper>
    );

    // Find the input element
    const inputElement = screen.getByPlaceholderText(
      "ex: 11.111.111-1111/11"
    ) as HTMLInputElement;

    // Simulate typing a CNPJ
    act(() => {
      fireEvent.change(inputElement, {
        target: { value: "00.000.000-0001/91" },
      });
    });

    expect(inputElement.value).toMatch(/00\.000\.000\/0001\-91/); // Regex match
  });

  it("should handle blur event correctly", () => {
    const Wrapper = ({ children }: PropsWithChildren) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    render(
      <Wrapper>
        <DocumentTextInput />
      </Wrapper>
    );

    // Find the input element
    const inputElement = screen.getByPlaceholderText(
      "ex: 11.111.111-1111/11"
    ) as HTMLInputElement;

    // Simulate typing a CPF
    act(() => {
      fireEvent.change(inputElement, { target: { value: "191" } });
    });

    act(() => {
      // Simulate blur event
      fireEvent.blur(inputElement);
    });

    // Ensure the value is set in the form context
    expect(inputElement.value).toMatch(/00\.000\.000\/0001\-91/); // Regex match
  });

  it("should handle key press event correctly", () => {
    const Wrapper = ({ children }: PropsWithChildren) => {
      const methods = useForm();
      return <FormProvider {...methods}>{children}</FormProvider>;
    };

    render(
      <Wrapper>
        <DocumentTextInput />
      </Wrapper>
    );

    // Find the input element
    const inputElement = screen.getByPlaceholderText("ex: 11.111.111-1111/11");

    act(() => {
      // Simulate pressing Enter key
      fireEvent.keyDown(inputElement, { key: "Enter" });
    });

    expect(inputElement).toHaveFocus(); // After focus
  });
});

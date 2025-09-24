import { useICBoxPJStore } from "@/lib/store";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useSearchForm } from "../useSearchForm"; // Adjust the path as needed

vi.mock("@/lib/store", () => ({
  useICBoxPJStore: {
    getState: vi.fn(),
  },
}));

describe("useSearchForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize the form with default values", () => {
    const mockGetResult = vi.fn();
    (useICBoxPJStore.getState as any).mockReturnValue({
      getResult: mockGetResult,
    });

    const { result } = renderHook(() => useSearchForm());

    expect(result.current.form.getValues()).toEqual({ document: "" });
  });

  // it("should handle form submission", async () => {
  //   const mockGetResult = vi.fn();
  //   (useICBoxPJStore.getState as vi.Mock).mockReturnValue({
  //     getResult: mockGetResult,
  //   });

  //   const { result } = renderHook(() => useSearchForm());

  //   await act(async () => {
  //     await result.current.form.handleSubmit(result.current.handleFormSubmit)({
  //       document: "12.345.678/0001-95",
  //     });
  //   });

  //   expect(mockGetResult).toHaveBeenCalledWith({
  //     document: "12.345.678/0001-95",
  //   });
  // });

  it("should provide product and apetite select data", () => {
    const mockGetResult = vi.fn();
    (useICBoxPJStore.getState as any).mockReturnValue({
      getResult: mockGetResult,
    });

    const { result } = renderHook(() => useSearchForm());

    expect(result.current.productSelectData).toEqual([
      { AberturaDeConta: "Abertura de Conta" },
      { CapitalDeGiro: "Capital de Giro" },
      { CartaoDeCredito: "Cartão de Crédito" },
    ]);

    expect(result.current.apetiteSelectData).toEqual([
      { Conservador: "Conservador" },
      { Arrojado: "Arrojado" },
      { UltraConservador: "Ultraconservador" },
    ]);
  });
});

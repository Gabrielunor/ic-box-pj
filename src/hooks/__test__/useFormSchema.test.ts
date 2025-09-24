import { useICBoxPJStore } from "@/lib/store";
import { cnpj } from "cpf-cnpj-validator";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useFormSchema } from "../useFormSchema"; // Adjust the path as needed

vi.mock("@/lib/store", () => ({
  useICBoxPJStore: {
    getState: vi.fn(),
  },
}));

vi.mock("cpf-cnpj-validator", () => ({
  cnpj: {
    isValid: vi.fn(),
  },
}));

describe("useFormSchema", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return the base schema when version is not pre-qualificacao", () => {
    const mockGetState = vi.fn(() => ({ version: "aprova" }));
    (useICBoxPJStore.getState as jest.Mock).mockImplementation(mockGetState);

    const { searchFormSchemaBasedOnVersion } = useFormSchema();
    const schema = searchFormSchemaBasedOnVersion();

    const validDocument = "12.345.678/0001-95";
    (cnpj.isValid as jest.Mock).mockReturnValue(true);

    expect(() => schema.parse({ document: validDocument })).not.toThrow();

    expect(cnpj.isValid).toHaveBeenCalledWith(validDocument);
    expect(schema.safeParse({ document: "" }).success).toBe(false);
    expect(schema.safeParse({ document: validDocument }).success).toBe(true);
  });

  it("should extend the schema when version is pre-qualificacao", () => {
    const mockGetState = vi.fn(() => ({ version: "pre-qualificacao" }));
    (useICBoxPJStore.getState as jest.Mock).mockImplementation(mockGetState);

    const { searchFormSchemaBasedOnVersion } = useFormSchema();
    const schema = searchFormSchemaBasedOnVersion();

    expect(
      schema.safeParse({
        document: "12.345.678/0001-95",
        creditOperation: "some-operation",
        riskLevel: "high",
      }).success
    ).toBe(true);
  });
});
